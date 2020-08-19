import { h, Component } from 'preact';
import { Router } from 'preact-router';
import { Link } from 'preact-router/match';

import Header from './sfc/Header';
import Banner from './sfc/Banner';

// Code-splitting is automated for routes
import Home from '../routes/home';

export default class App extends Component {
	
	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url;
	};

	render() {
		return (
			<div id="app">
				<Header />
				<Banner>
					<Link href="/app/9list">
						<span>
							Coming Soon: 9List &mdash; Shopping made easy.<br/>
						</span>
					</Link>
				</Banner>
				<Router onChange={this.handleRoute}>
					<Home path="/" />
				</Router>
			</div>
		);
	}
}
