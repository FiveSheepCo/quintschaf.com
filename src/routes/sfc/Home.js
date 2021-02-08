import { h } from 'preact';
import style from '../scss/Home';
import JumboOSS from '../../components/sfc/JumboOSS';
import NewsletterBox from '../../components/sfc/NewsletterBox';
import JumboMyKeyboard from '../../components/sfc/JumboMyKeyboard';

const Home = () => (
	<div class={style.home}>
        <JumboMyKeyboard />
        <JumboOSS />
        <NewsletterBox />
	</div>
);

export default Home;
