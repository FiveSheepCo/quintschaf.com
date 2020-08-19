import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from '../scss/AppStoreButton';

const AppStoreButton = ({href}) => (
	<Link href={href} class={style.btn}>
        <img src="../../assets/dl_appstore_us.svg"/>
    </Link>
);

export default AppStoreButton;
