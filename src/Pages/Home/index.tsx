import Carousel from '@components/Carousel'
import { Button, Card, Image } from 'semantic-ui-react'
import './home.scss'
import firebase from '../../Firebase/firebase'
import { useEffect, useState } from 'react'

interface product {
	name: string
	description: string
	url: string
	img_src: string
}

export default function Home() {
	const [products, setProducts] = useState<product[]>([])
	useEffect(() => {
		return firebase
			.firestore()
			.collection('products')
			.onSnapshot(col => {
				setProducts(col.docs.map(doc => doc.data() as product))
			})
	}, [])
	return (
		<div id="home">
			<Carousel
				items={Array.from({ length: 10 }, (_, idx) => ({
					src: `https://picsum.photos/500/500?random=${idx}`,
					caption: `Image ${idx + 1}`,
				}))}
			/>
			<div id="products">
				{products.map((product, idx) => (
					<Card key={idx} className="product">
						<Image
							src={`https://picsum.photos/500/500?random=${idx}`}
						/>
						<Card.Content>
							<Card.Header>{product.name}</Card.Header>
							<Card.Description>
								{product.description}
							</Card.Description>
						</Card.Content>
						<Card.Content>
							<a href={product.url}>
								<Button fluid>View on Etsy</Button>
							</a>
						</Card.Content>
					</Card>
				))}
			</div>
		</div>
	)
}
