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

interface news {
	src: string
	caption: string
}

export default function Home() {
	const [products, setProducts] = useState<product[]>([])
	const [news, setNews] = useState<news[]>([])

	useEffect(() => {
		return firebase
			.firestore()
			.collection('products')
			.onSnapshot(col => {
				setProducts(col.docs.map(doc => doc.data() as product))
			})
	}, [])
	useEffect(() => {
		return firebase
			.firestore()
			.collection('news')
			.onSnapshot(col => {
				setNews(col.docs.map(doc => doc.data() as news))
			})
	}, [])
	return (
		<div id="home">
			<Carousel items={news} />
			<div id="products">
				{products.map((product, idx) => (
					<Card key={idx} className="product">
						<Image src={product.img_src} />
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
