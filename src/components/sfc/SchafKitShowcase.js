import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from '../scss/Showcase';
import GitHubButton from './GitHubButton';

const SchafKitShowcase = () => (
	<div class={style.showcase}>
        <h2>SchafKit</h2>
        <div class={style.subtitle}>
            An open kit providing useful functionality.<br />
            For iOS, watchOS, macOS and tvOS.
        </div>
        <div class={style.badges}>
            <img src="https://flat.badgen.net/github/open-issues/quintschaf/schafkit?scale=1.4" />
            <img src="https://flat.badgen.net/github/closed-issues/quintschaf/schafkit?scale=1.4" />
        </div>
        <GitHubButton href="https://github.com/quintschaf/SchafKit">
            View on GitHub
        </GitHubButton>
    </div>
);

export default SchafKitShowcase;
