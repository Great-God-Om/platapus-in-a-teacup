import Carousel from '@components/Carousel'
import { Card, Image } from 'semantic-ui-react'
import './home.scss'
export default function Home() {
	return (
		<div id="home">
			<Carousel
				items={Array.from({ length: 10 }, (_, idx) => ({
					src: `https://picsum.photos/500/500?random=${idx}`,
					caption: `Image ${idx + 1}`,
				}))}
			/>
			<div id="products">
				{Array.from({ length: 12 }).map((_, idx) => (
					<Card key={idx} className="product">
						<Image
							src={`https://picsum.photos/500/500?random=${idx}`}
						/>
						<Card.Content>Monkey</Card.Content>
					</Card>
				))}
			</div>
		</div>
	)
}
