import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from '../scss/Header';

const Header = () => (
	<header class={style.header}>
		<div class={style.bg}/>
		<div class={style.content}>
			<Link class={style.logo} href="/">
				<img src="../../assets/logo.svg"/>
			</Link>
			<nav>
				<Link activeClassName={style.active} href="/app/9list">9List</Link>
				<Link activeClassName={style.active} href="/app/drillbase">DrillBase</Link>
				<Link activeClassName={style.active} href="/app/drillbase">Developers</Link>
			</nav>
		</div>
	</header>
);

export default Header;
