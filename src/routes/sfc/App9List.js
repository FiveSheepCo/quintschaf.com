import { h } from 'preact'
import { Clock, Bell, Check, DollarSign } from 'preact-feather'
import style from '../scss/App9List'
import NineListIcon from '../../components/sfc/9ListIcon'
import AppStoreButton from '../../components/sfc/AppStoreButton'

const gridEntries = [
    {
        icon: Check,
        title: 'Easy to use',
        body: 'Just tap, type, return.'
    },
    {
        icon: DollarSign,
        title: 'Free forever',
        body: 'One store with one location.'
    },
    {
        icon: Clock,
        title: 'Saving your time',
        body: 'Faster than a shopping list.'
    },
    {
        icon: Bell,
        title: 'Ready when you are',
        body: 'Get reminded at the right time.'
    }
]

const App9List = () => (
    <main class={style.main}>
        <h1>9List</h1>
        <div class={style.subtitle}>Now available for iPhone.</div>
        <NineListIcon shadow={true} />
        <div class={style.featureGrid}>
            {gridEntries.map(({ icon, title, body }) => (
                <div key={title} class={style.gridEntry}>
                    {h(icon, { class: style.icon })}
                    <span class={style.title}>{title}</span>
                    <div class={style.break} />
                    <span class={style.body}>{body}</span>
                </div>
            ))}
        </div>
        <AppStoreButton href='https://apps.apple.com/tt/app/9list/id1526016990' />
        <div class={style.seotext}>
            <div class={style.seotitle}>App Description</div>
            9List is a shopping list. If that doesn’t sound interesting, it’s
            because you’re used to shopping lists being primitive and boring
            tools that make your life just a little easier.
            <br />
            <br />
            Our app implements a novel approach to managing your shopping list
            by remembering what you wanna buy and where you wanna buy it,
            grouping items by category and using real-time location triggers to
            remind you exactly at the right moment.
            <br />
            <br />
            Especially in the current times, tracking the items you wanna buy
            using anything other than paper is quite challenging. You can't pull
            down your mask just to take a quick glance at your digital shopping
            list. Luckily with 9List, you don't have to.
            <br />
            <br />
            The 9List notification system allows you to see all the items on
            your shopping list and even mark them as completed right from the
            lock screen, no need to authenticate.
            <br />
            <br />
            Advanced features like adding multiple shop locations and sharing
            are available for a small one-time fee that unlocks everything.
            <br />
            <br />
            And the best part: It’s likely to be cheaper than the first item on
            your shopping list!
        </div>
    </main>
)

export default App9List
