import { h } from 'preact'
import { Share, MessageCircle, BarChart2, DownloadCloud } from 'preact-feather'
import style from '../scss/AppChatalyzer'
import AppSymbol from '../../components/sfc/AppSymbol'
import AppStoreButton from '../../components/sfc/AppStoreButton'

const gridEntries = [
    {
        icon: BarChart2,
        title: 'Fun Statistics',
        body: 'What are your top swear words?'
    },
    {
        icon: DownloadCloud,
        title: 'Import from Backup',
        body: 'Supports many popular messaging apps!'
    },
    {
        icon: MessageCircle,
        title: 'Multi-Messenger Support',
        body: 'WhatsApp, Tinder, iMessage, SMS and more!'
    },
    {
        icon: Share,
        title: 'Export Summary',
        body: 'Share the summary with your friend!'
    },
]

const AppChatalyzer = () => (
    <main class={style.main}>
        <h1>Chatalyzer</h1>
        <div class={style.subtitle}>Analyze WhatsApp, Tinder, iMessage, etc.</div>
        <AppSymbol
            img="./../../assets/chatalyzer.svg"
            href="/app/chatalyzer"
            showShadow={false}
            showName={false}
            showBetaBadge={false}
        />
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
        <AppStoreButton href='https://apps.apple.com/app/chatalyzer-analyze-chats/id1614068067' />
        <div class={style.seotext}>
            <div class={style.seotitle}>App Description</div>
            Chatalyzer is a powerful tool for analyzing your chats from various messengers!
            <br />
            <br />
            Import a backup and get instant statistics about most used swear words, websites,
            emoji, and more! Did you ever want to know who sends the longest voice messages
            or who sends the most messages? Do you feel like your partner is sending less
            messages than you are? Now you can proof it once and for all!
            <br />
            <br />
            Chatalyzer automatically analyzes many aspects of your chats and provides an easy
            to use interface to access these fun facts and statistics. You can even export
            them as images and send them to your friends! Chatalyzer provides many different
            image presets so you can share the perfect visual overview over your chats.
        </div>
    </main>
)

export default AppChatalyzer
