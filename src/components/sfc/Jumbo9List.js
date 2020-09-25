import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from '../scss/Jumbo9List';
import AppStoreButton from './AppStoreButton';
import SubscribeButton from './SubscribeButton';
import NineListIcon from './9ListIcon';

const Jumbo9List = () => (
	<div class={style.jumbo}>
        <h2>9List</h2>
        <span class={style.subtitle}>
            Shopping made easy.<br/>
            Coming <span class={style.bold}>October 15th</span> for iPhone.<br/>
        </span>
        <NineListIcon/>
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
