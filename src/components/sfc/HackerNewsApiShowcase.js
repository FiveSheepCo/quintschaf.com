import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from '../scss/SchafKitShowcase';
import GitHubButton from './GitHubButton';

const HackerNewsApiShowcase = () => (
	<div class={style.showcase}>
        <h2>HackerNews API</h2>
        <div class={style.subtitle}>
            A Swift Wrapper for the Hacker News API.
        </div>
        <div class={style.badges}>
            <img src="https://flat.badgen.net/github/open-issues/quintschaf/HackerNewsAPI?scale=1.4" />
            <img src="https://flat.badgen.net/github/closed-issues/quintschaf/HackerNewsAPI?scale=1.4" />
        </div>
        <GitHubButton href="https://github.com/quintschaf/HackerNewsAPI">
            View on GitHub
        </GitHubButton>
    </div>
);

export default HackerNewsApiShowcase;
