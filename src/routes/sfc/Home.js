import { h } from 'preact';
import style from '../scss/Home';
import Jumbo9List from '../../components/sfc/Jumbo9List';
import JumboOSS from '../../components/sfc/JumboOSS';

const Home = () => (
	<div class={style.home}>
		<Jumbo9List />
        <JumboOSS />
	</div>
);

export default Home;
