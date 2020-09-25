import { h } from 'preact';
import { Clock, Bell, Check, MapPin, DollarSign } from 'preact-feather';
import style from '../scss/App9List';
import SubscribeButton from '../../components/sfc/SubscribeButton';
import NineListIcon from '../../components/sfc/9ListIcon';

const gridEntries = [
    {
        "icon": Check,
        "title": "Easy to use",
        "body": "Just tap, type, return."
    },
    {
        "icon": DollarSign,
        "title": "Free forever",
        "body": "One store with one location."
    },
    {
        "icon": Clock,
        "title": "Saving your time",
        "body": "Faster than a shopping list."
    },
    {
        "icon": Bell,
        "title": "Ready when you are",
        "body": "Get reminded at the right time."
    },
]

const App9List = () => (
	<main class={style.main}>
        <h1>9List</h1>
        <div class={style.subtitle}>
            Coming October 15th.
        </div>
        <NineListIcon shadow={true}/>
        <div class={style.featureGrid}>
            { gridEntries.map(({icon, title, body}) => (
                <div class={style.gridEntry}>
                    {h(icon, {class: style.icon})}
                    <span class={style.title}>{title}</span>
                    <div class={style.break} />
                    <span class={style.body}>{body}</span>
                </div>
            )) }
        </div>
        <SubscribeButton href="https://eepurl.com/hbk8wT">
            Subscribe to our Newsletter
        </SubscribeButton>
        <span class={style.subscribeSubtitle}>Get notified as soon as 9List is available!</span>
	</main>
);

export default App9List;
