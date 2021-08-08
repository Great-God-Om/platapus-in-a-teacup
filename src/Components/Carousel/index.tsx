import { useCallback, useRef, useState } from 'react'
import { Container } from 'semantic-ui-react'
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi'
import './Carousel.scss'

interface ICarouselProps {
	items: string[]
}

export default function Carousel({ items }: ICarouselProps) {
	const [current, setcurrent] = useState<number>(0)

	const handleClick = useCallback(
		e => {
			setcurrent(prev => {
				if (e.target.dataset.dir === 'back')
					return prev - 1 + (items.length % items.length)
				else {
					return (prev + 1) % items.length
				}
			})
		},
		[items.length]
	)
	return (
		<Container fluid className="carousel">
			<div className="left-arrow" data-dir="back" onClick={handleClick}>
				<BiLeftArrow />
			</div>
			{items.map((item, idx) => (
				<img
					key={idx}
					src={item}
					loading="lazy"
					alt="News on new products"
					className={current === idx ? 'slide active' : 'slide'}
				/>
			))}
			<div
				className="right-arrow"
				data-dir="forward"
				onClick={handleClick}>
				<BiRightArrow />
			</div>
		</Container>
	)
}
