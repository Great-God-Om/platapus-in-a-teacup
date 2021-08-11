import { useCallback, useEffect, useReducer, useRef } from 'react'
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi'
import styles from './Carousel.module.scss'

interface ICarouselProps {
	items: {
		src: string
		caption: string
	}[]
}
type CarouselAction = {
	type: string
	payload?: number
}

type CarouselState = {
	active: number
	target: number
}

const INTERVAL = 350

const fadeout = {
	styles: [
		{
			opacity: 1,
			easing: 'ease-in',
		},
		{
			opacity: 0,
			easing: 'ease-out',
		},
	],
	timing: {
		duration: INTERVAL,
		fill: 'forwards',
	} as KeyframeAnimationOptions,
}

const fadein = {
	styles: [
		{
			opacity: 0,
		},
		{
			opacity: 1,
		},
	],
	timing: {
		duration: INTERVAL,
		fill: 'forwards',
	} as KeyframeAnimationOptions,
}

export default function Carousel({ items }: ICarouselProps) {
	const length = items.length
	const [current, dispatch] = useReducer(
		(prev: CarouselState, action: CarouselAction): CarouselState => {
			switch (action.type) {
				case 'next':
					return {
						...prev,
						target: (prev.active + 1) % length,
					}
				case 'prev':
					return {
						...prev,
						target: (prev.active - 1 + length) % length,
					}
				case 'jump':
					return {
						...prev,
						target: action.payload ?? 0,
					}
				case 'done':
					return {
						...prev,
						active: prev.target,
					}
				default:
					return prev
			}
		},
		{
			active: 0,
			target: 0,
		},
		undefined
	)
	const imageRef = useRef<HTMLImageElement>(null)

	const handleClick = useCallback(e => {
		dispatch({
			type: e.target.dataset.dir,
		})
	}, [])
	/* eslint-disable react-hooks/exhaustive-deps  */
	useEffect(() => {
		if (current.active !== current.target) {
			if (imageRef.current) {
				imageRef.current.animate(
					fadeout.styles,
					fadeout.timing
				).onfinish = () => {
					dispatch({
						type: 'done',
					})
				}
				imageRef.current.onload = () => {
					imageRef.current?.animate(fadein.styles, fadein.timing)
				}
			}
		}
	}, [current.target])
	/* eslint-enable react-hooks/exhaustive-deps  */

	return (
		<div className={styles.carousel}>
			<div className={styles.carousel_display}>
				<div
					className={styles.left_arrow}
					data-dir="prev"
					onClick={handleClick}>
					<BiLeftArrow />
				</div>
				<img
					ref={imageRef}
					src={items[current.active].src}
					loading="lazy"
					className={styles.slide}
					alt="News on new products"
				/>
				<div className={styles.image_caption}>
					{items[current.active].caption}
				</div>
				<div
					className={styles.right_arrow}
					data-dir="next"
					onClick={handleClick}>
					<BiRightArrow />
				</div>
			</div>
			<div className={styles.carousel_dots}>
				{items.map((_, idx) => {
					return (
						<div
							key={idx}
							className={
								idx === current.active ? styles.active : ''
							}
							onClick={() => {
								dispatch({
									type: 'jump',
									payload: idx,
								})
							}}></div>
					)
				})}
			</div>
		</div>
	)
}
