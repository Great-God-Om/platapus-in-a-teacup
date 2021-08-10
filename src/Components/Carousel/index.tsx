import { useCallback, useEffect, useReducer, useRef } from 'react'
import { Container } from 'semantic-ui-react'
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi'
import './Carousel.scss'

interface ICarouselProps {
	items: string[]
}
type CarouselAction = {
	type: string
	payload?: number
}

type CarouselState = {
	active: number
	target: number
}

const INTERVAL = 400

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
		<Container fluid className="carousel">
			<div className="carousel-display">
				<div
					className="left-arrow"
					data-dir="prev"
					onClick={handleClick}>
					<BiLeftArrow />
				</div>
				<img
					ref={imageRef}
					src={items[current.active]}
					loading="lazy"
					className="slide"
					alt="News on new products"
				/>
				<div
					className="right-arrow"
					data-dir="next"
					onClick={handleClick}>
					<BiRightArrow />
				</div>
			</div>
			<div className="carousel-dots">
				{items.map((_, idx) => {
					return (
						<div
							key={idx}
							className={
								idx === current.active ? 'active' : ''
							}
							onClick={() => {
								dispatch({
									type: 'jump',
									payload: idx
								})
							}}></div>
					)
				})}
			</div>
		</Container>
	)
}
