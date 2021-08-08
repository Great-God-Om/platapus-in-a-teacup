import React from 'react'
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom'
import { Loader } from 'semantic-ui-react'
import './App.scss'

import Footer from '@components/Footer'
import Navbar from '@components/Navbar'

const Home = React.lazy(() => import('@pages/Home'))
const About = React.lazy(() => import('@pages/About'))
const Shipping = React.lazy(() => import('@pages/Shipping'))
const Faq = React.lazy(() => import('@pages/Faq'))
const Contact = React.lazy(() => import('@pages/Contact'))

export default function App() {
	return (
		<div id="main">
			<Router>
				<Navbar />
				<React.Suspense fallback={<Loader></Loader>}>
					<Switch>
						<Route path="/shop" exact component={Home} />
						<Route path="/about" exact component={About} />
						<Route path="/shipping" exact component={Shipping} />
						<Route path="/faq" exact component={Faq} />
						<Route path="/contact" exact component={Contact} />
						<Route path="/" exact>
							<Redirect to="/shop" />
						</Route>
					</Switch>
				</React.Suspense>
			</Router>
			<Footer />
		</div>
	)
}
