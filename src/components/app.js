import { h, Component } from 'preact';
import { Router } from 'preact-router';
import { Link } from 'preact-router/match';
import { createHashHistory } from 'history';

import PageWrapper from './sfc/PageWrapper';
import Header from './sfc/Header';
import Banner from './sfc/Banner';
import Footer from './sfc/Footer';

// Code-splitting is automated for routes
import Home from '../routes/sfc/Home';
import Imprint from '../routes/sfc/Imprint';
import PrivacyPolicy from '../routes/sfc/PrivacyPolicy';
import Developers from '../routes/sfc/Developers';
import Support from '../routes/sfc/Support';
import AppOverview from '../routes/sfc/AppOverview';
import App9List from '../routes/sfc/App9List';
import AppMyKeyboard from '../routes/sfc/AppMyKeyboard';
import Business from '../routes/sfc/Business';

export default class App extends Component {
	
	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
        this.currentUrl = e.url;
        if (window.scrollX != 0 || window.scrollY != 0) {
            window.scrollTo(0, 0);
        }
	};

	render() {
		return (
			<div id="app">
				<Header />
				<PageWrapper>
					<Banner>
                        <Link href="/app/mykeyboard">
                            <span>
								MyKeyboard 3 is out now &mdash; give it a try!<br />
							</span>
                        </Link>
					</Banner>
					<Router history={createHashHistory()} onChange={this.handleRoute}>
						<Home path="/" />
                        <AppOverview path="/apps" />
                        <App9List path="/app/9list" />
                        <AppMyKeyboard path="/app/mykeyboard" />
						<Developers path="/developers" />
                        <Support path="/support" />
                        <Business path="/business" />
						<Imprint path="/imprint" />
                        <PrivacyPolicy path="/privacy" />
					</Router>
				</PageWrapper>
				<Footer />
			</div>
		);
	}
}
