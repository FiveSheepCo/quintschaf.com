import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from '../scss/Banner';

const Banner = ({children}) => (
	<banner class={style.banner}>
        {children}
    </banner>
);

export default Banner;
