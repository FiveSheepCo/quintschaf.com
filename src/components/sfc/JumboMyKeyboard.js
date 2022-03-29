import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from '../scss/Jumbo9List';
import AppSymbol from './AppSymbol'
import AppStoreButton from './AppStoreButton';

const VSpacer = ({length}) => (
    <div style={`display:block;min-height:${length}rem;max-height:${length}rem;`} />
);

const JumboMyKeyboard = () => (
	<div class={style.jumbo}>
        <h2>MyKeyboard 3</h2>
        <span class={style.subtitle}>
            The fully customizable keyboard<br />
        </span>
        <AppSymbol
            img="./../../assets/mykeyboard.svg"
            href="/app/mykeyboard"
            showShadow={true}
            showName={false}
            showBetaBadge={false}
        />
        <VSpacer length={2} />
        <Link class={style.moreInfo} href="/app/mykeyboard">
            Features, Details and more
        </Link>
        <AppStoreButton href="https://apps.apple.com/app/mykeyboard-fully-customizable/id1455404109" />
    </div>
);

export default JumboMyKeyboard;
