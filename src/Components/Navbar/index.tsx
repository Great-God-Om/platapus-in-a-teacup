import { useCallback, useState } from 'react'
import { Menu } from 'semantic-ui-react'

export default function Navbar(): JSX.Element {
	const [currentPage, setCurrentPage] = useState<string>('Shop')
	const clickHandler = useCallback((_, { name }) => {
		setCurrentPage(name)
	}, [])
	return (
		<Menu pointing secondary>
			<Menu.Item
				name="Shop"
				onClick={clickHandler}
				active={currentPage === 'Shop'}
			/>
			<Menu.Item
				name="About"
				onClick={clickHandler}
				active={currentPage === 'About'}
			/>
			<Menu.Item
				name="Shipping"
				onClick={clickHandler}
				active={currentPage === 'Shipping'}
			/>
			<Menu.Item
				name="FAQ"
				onClick={clickHandler}
				active={currentPage === 'FAQ'}
			/>
			<Menu.Item
				name="Contact"
				onClick={clickHandler}
				active={currentPage === 'Contact'}
			/>
		</Menu>
	)
}
