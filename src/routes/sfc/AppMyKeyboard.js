import { h } from 'preact'
import style from '../scss/AppMyKeyboard'
import AppSymbol from '../../components/sfc/AppSymbol'
import TestFlightButton from '../../components/sfc/TestFlightButton'

const VSpacer = ({length}) => (
    <div style={`display:block;min-height:${length}rem;max-height:${length}rem;`} />
);

const gridEntries = [
    {
        image: '../../assets/mykeyboard/KeyboardBuilder.png',
        title: 'Spice things up',
        body: 'Build your keyboard just the way you want using our beginner-friendly keyboard builder.'
    },
    {
        image: '../../assets/mykeyboard/Themes.png',
        title: 'Unleash your creativity',
        body: 'Use beautiful themes or create your own using the fully-featured theme creator.'
    },
    {
        image: '../../assets/mykeyboard/Layouts.png',
        title: 'Manage your Layouts',
        body: 'Create as many keyboard layouts as you want and switch them up when you feel like it.'
    },
    {
        image: '../../assets/mykeyboard/Logo.png',
        title: 'Join the Beta',
        body: 'All features are free during the Beta, so go wild!'
    },
]

const AppMyKeyboard = () => (
    <main class={style.main}>
        <h1>MyKeyboard</h1>
        <div class={style.subtitle}>Now available for beta testing.</div>
        <AppSymbol
            img="./../../assets/mykeyboard.svg"
            href="/app/mykeyboard"
            showShadow={true}
            showName={false}
            showBetaBadge={true}
        />
        <VSpacer length={2} />
        <div class={style.featureGrid}>
            {gridEntries.map(({ image, title, body }) => (
                <div class={style.gridEntry}>
                    <span class={style.title}>{title}</span>
                    <img src={image} class={style.image} />
                    <span class={style.body}>{body}</span>
                </div>
            ))}
        </div>
        <TestFlightButton href="https://testflight.apple.com/join/rTGgFRe4" />
        <div class={style.seotext}>
            <div class={style.seotitle}>App Description</div>
            MyKeyboard is a new keyboard for iOS, offering many advanced features:
            <br />
            <ul>
                <li>Keyboard Builder for easily creating custom keyboard layouts</li>
                <li>Advanced Keyboard Editor for freely changing keys, rows, actions, subkeys and more</li>
                <li>Advanced Theme Editor for creating highly customized keyboard themes</li>
                <li>Easy deletion where swiping left will delete text and swiping right will restore it</li>
                <li>Smart Emoji suggestions matching the currently typed word</li>
                <li>Contact key for quick access to personal information (address, name, email, etc.)</li>
            </ul>
            All of these features allow for endless customization by power-users,
            while still ensuring that casual users can still easily do basic customization
            using the beginner-friendly Keyboard Builder and beautifully handcrafted themes.
            <br /><br />
            The free base theme is similar to the iOS system keyboard to get you started in a
            familiar environment, with two alternative free themes and a great amount of handcrafted
            themes which can be purchased individually or in a bundle.
        </div>
    </main>
)

export default AppMyKeyboard
