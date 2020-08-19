import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from '../scss/Jumbo9List';
import AppStoreButton from './AppStoreButton';

const Jumbo9List = () => (
	<div class={style.jumbo}>
        <h2>9List</h2>
        <span class={style.subtitle}>
            Shopping made easy.
        </span>
        <AppStoreButton href="#todo"/>
    </div>
);

export default Jumbo9List;
