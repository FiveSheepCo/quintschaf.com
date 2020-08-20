import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from '../scss/Footer';

const Footer = () => (
	<footer class={style.footer}>
        <div class={style.nav}>
            <Link href="/imprint">Imprint</Link>
        </div>
    </footer>
);

export default Footer;
