import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from '../scss/Jumbo9List';
// import AppStoreButton from './AppStoreButton';
import AppSymbol from './AppSymbol'
import TestFlightButton from './TestFlightButton';

const VSpacer = ({length}) => (
    <div style={`display:block;min-height:${length}rem;max-height:${length}rem;`} />
);

const JumboMyKeyboard = () => (
	<div class={style.jumbo}>
        <h2>Featured</h2>
        <span class={style.subtitle}>
            MyKeyboard - Fully Customizable<br />
        </span>
        <AppSymbol
            img="./../../assets/mykeyboard.svg"
            href="/app/mykeyboard"
            showShadow={true}
            showName={false}
            showBetaBadge={true}
        />
        <VSpacer length={2} />
        <Link class={style.moreInfo} href="/app/mykeyboard">
            Features, Details and more
        </Link>
        <TestFlightButton href="https://testflight.apple.com/join/rTGgFRe4" />
    </div>
);

export default JumboMyKeyboard;
