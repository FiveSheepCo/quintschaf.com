import { h } from 'preact';
import style from '../scss/Home';
import Jumbo9List from '../../components/sfc/Jumbo9List';
import JumboOSS from '../../components/sfc/JumboOSS';
import NewsletterBox from '../../components/sfc/NewsletterBox';
// import AppDrawer from '../../components/sfc/AppDrawer';

const Home = () => (
	<div class={style.home}>
        {/* Enable AppDrawer as soon as more apps are released */}
        {/* <AppDrawer /> */}
		<Jumbo9List />
        <JumboOSS />
        <NewsletterBox />
	</div>
);

export default Home;
