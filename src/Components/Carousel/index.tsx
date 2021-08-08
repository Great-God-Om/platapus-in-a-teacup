import { useCallback, useRef, useState } from 'react'
import { Container } from 'semantic-ui-react'
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi'
import './Carousel.scss'

interface ICarouselProps {
	items: string[]
}

const INTERVAL = 900

export default function Carousel({ items }: ICarouselProps) {
	const [current, setcurrent] = useState<number>(0)
	const imageRef = useRef<HTMLImageElement>(null)

	const handleClick = useCallback(
		e => {
			imageRef.current?.classList.remove('active')
			imageRef.current?.classList.add('inactive')

			setTimeout(() => {
				setcurrent(prev => {
					if (e.target.dataset.dir === 'back')
						return prev - 1 + (items.length % items.length)
					else {
						return (prev + 1) % items.length
					}
				})

				// Wait for Image to Load: Later will make the image return a placeholder
				setTimeout(() => {
					imageRef.current?.classList.remove('inactive')
					imageRef.current?.classList.add('active')
				}, INTERVAL / 2)
			}, INTERVAL / 2)
		},
		[items.length]
	)
	return (
		<Container fluid className="carousel">
			<div className="left-arrow" data-dir="back" onClick={handleClick}>
				<BiLeftArrow />
			</div>
			<img
				ref={imageRef}
				src={items[current]}
				loading="lazy"
				className="slide"
				alt="News on new products"
			/>
			<div
				className="right-arrow"
				data-dir="forward"
				onClick={handleClick}>
				<BiRightArrow />
			</div>
		</Container>
	)
}
