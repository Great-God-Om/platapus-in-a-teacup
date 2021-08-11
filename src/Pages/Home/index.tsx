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
				<Card>
					<Image src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.vets4pets.com%2Fsiteassets%2Fspecies%2Fcat%2Fcat-close-up-of-side-profile.jpg%3Fw%3D585%26scale%3Ddown&f=1&nofb=1"></Image>
					<Card.Content></Card.Content>
				</Card>
				<Card>
					<Image src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.vets4pets.com%2Fsiteassets%2Fspecies%2Fcat%2Fcat-close-up-of-side-profile.jpg%3Fw%3D585%26scale%3Ddown&f=1&nofb=1"></Image>
					<Card.Content></Card.Content>
				</Card>
				<Card>
					<Image src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.vets4pets.com%2Fsiteassets%2Fspecies%2Fcat%2Fcat-close-up-of-side-profile.jpg%3Fw%3D585%26scale%3Ddown&f=1&nofb=1"></Image>
					<Card.Content></Card.Content>
				</Card>
				<Card>
					<Image src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.vets4pets.com%2Fsiteassets%2Fspecies%2Fcat%2Fcat-close-up-of-side-profile.jpg%3Fw%3D585%26scale%3Ddown&f=1&nofb=1"></Image>
					<Card.Content></Card.Content>
				</Card>
				<Card>
					<Image src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.vets4pets.com%2Fsiteassets%2Fspecies%2Fcat%2Fcat-close-up-of-side-profile.jpg%3Fw%3D585%26scale%3Ddown&f=1&nofb=1"></Image>
					<Card.Content></Card.Content>
				</Card>
			</div>
		</div>
	)
}
