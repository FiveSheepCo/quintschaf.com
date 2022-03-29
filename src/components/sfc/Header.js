import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from '../scss/Header';

const Header = () => (
	<header class={style.header}>
		<div class={style.bg} />
		<div class={style.content}>
			<Link class={style.logo} href="/">
				<img src="../../assets/logo.svg" />
			</Link>
			<nav role="navigation">
				<Link activeClassName={style.active} href="/apps">Apps</Link>
				<Link activeClassName={style.active} href="/developers">Open Source</Link>
                <a href="https://blog.quintschaf.com" target="_blank" rel="noopener noreferrer">Blog</a>
                <Link activeClassName={style.active} href="/support">Support</Link>
			</nav>
		</div>
	</header>
);

export default Header;
