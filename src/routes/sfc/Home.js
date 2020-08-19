import { h } from 'preact';
import style from '../scss/Home';
import Jumbo9List from '../../components/sfc/Jumbo9List';

const Home = () => (
	<div class={style.home}>
		<Jumbo9List/>
	</div>
);

export default Home;
