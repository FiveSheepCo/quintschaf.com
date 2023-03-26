import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from '../scss/GitHubButton';

const GitHubButton = ({theme = "dark", href, children}) => (
	<a target="_blank" href={href} class={style.btn} data-theme={theme} rel="noreferrer">
        <img src="../../assets/github.svg" />
        <div class={style.content}>
            {children}
        </div>
    </a>
);

export default GitHubButton;
