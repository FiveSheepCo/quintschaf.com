import { h } from 'preact';
import { useState } from 'preact/hooks';
import { Link } from 'preact-router/match';
import style from '../scss/Jumbo9List';
import AppSymbol from './AppSymbol'
import AppStoreButton from './AppStoreButton';

const VSpacer = ({length}) => (
    <div style={`display:block;min-height:${length}rem;max-height:${length}rem;`} />
);

const AppDefinitions = {
    mykeyboard: {
        title: 'MyKeyboard 3',
        subtitle: 'The fully customizable keyboard',
        img: '../../assets/mykeyboard.svg',
        link: '/app/mykeyboard',
        appStoreLink: 'https://apps.apple.com/app/mykeyboard-fully-customizable/id1455404109',
    },
    chatalyzer: {
        title: 'Chatalyzer',
        subtitle: 'Fun social messaging analysis',
        img: '../../assets/chatalyzer.svg',
        link: '/app/chatalyzer',
        appStoreLink: 'https://apps.apple.com/app/chatalyzer-analyze-chats/id1614068067',
    }
}

const JumboMyKeyboard = () => {
    const [activePane, setActivePane] = useState('chatalyzer');

    const getPaneStyle = name => ({ display: activePane === name ? 'flex' : 'none' });
    const getSwitcherClassName = name => [
        style.footerLink, activePane === name ? style.footerLinkActive : ''
    ].join(' ').trim()
    const app = AppDefinitions[activePane]

    return (
        <div class={style.jumbo}>
            <div className={style.splitPaneView}>
                <div className={style.pane}>
                    <h2>{app.title}</h2>
                    <span class={style.subtitle}>
                        {app.subtitle}<br />
                    </span>
                    <AppSymbol
                        img={app.img}
                        href={app.link}
                        showShadow={true}
                        showName={false}
                        showBetaBadge={false}
                    />
                    <VSpacer length={2} />
                    {/* <Link class={style.moreInfo} href="/app/mykeyboard">
                        Features, Details and more
                    </Link> */}
                    <AppStoreButton href={app.appStoreLink} />
                </div>
                <div className={style.footer}>
                    <div className={getSwitcherClassName('chatalyzer')} onClick={() => setActivePane('chatalyzer')}>
                        <AppSymbol showBorder={false} size={32} borderRadius='.25rem' name="Chatalyzer" img="./../../assets/chatalyzer.svg" />
                    </div>
                    <div className={getSwitcherClassName('mykeyboard')} onClick={() => setActivePane('mykeyboard')}>
                        <AppSymbol showBorder={false} size={32} borderRadius='.25rem' name="MyKeyboard" img="./../../assets/mykeyboard.svg" />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default JumboMyKeyboard;
