import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from '../scss/Jumbo9List';
import AppStoreButton from './AppStoreButton';
import SubscribeButton from './SubscribeButton';

const Jumbo9List = () => (
	<div class={style.jumbo}>
        <h2>9List</h2>
        <span class={style.subtitle}>
            Shopping made easy.<br/>
            Coming soon for iPhone.<br/>
        </span>
        <Link class={style.moreInfo} href="/app/9list">
            See details, features and more
        </Link>
        <SubscribeButton href="https://eepurl.com/hbk8wT">
            Subscribe to our Newsletter
        </SubscribeButton>
        <span class={style.subscribeSubtitle}>Get notified as soon as 9List is available!</span>
        {/* <AppStoreButton href="#todo"/> */}
    </div>
);

export default Jumbo9List;
