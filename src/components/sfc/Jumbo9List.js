import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from '../scss/Jumbo9List';
import AppStoreButton from './AppStoreButton';
import NineListIcon from './9ListIcon';

const Jumbo9List = () => (
	<div class={style.jumbo}>
        <h2>9List</h2>
        <span class={style.subtitle}>
            Shopping made easy<br />
        </span>
        <NineListIcon />
        <Link class={style.moreInfo} href="/app/9list">
            Features, Details and more
        </Link>
        <AppStoreButton href="https://apps.apple.com/tt/app/9list/id1526016990" />
    </div>
);

export default Jumbo9List;
