import Carousel from '@components/Carousel'
export default function Home() {
	return (
		<div id="home">
			<Carousel
				items={Array.from({ length: 10 }, (_, idx) => ({
					src: `https://picsum.photos/500/500?random=${idx}`,
					caption: `Image ${idx + 1}`,
				}))}
			/>
		</div>
	)
}
