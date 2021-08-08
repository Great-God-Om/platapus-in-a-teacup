import Carousel from '@components/Carousel'
export default function Home() {
	return (
		<div id="home">
			<Carousel
				items={Array(100000)
					.fill('')
					.map(
						(_, idx) =>
							`https://picsum.photos/500/500?random=${idx}`
					)}
			/>
		</div>
	)
}
