import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from '../scss/DeepObservatoryShowcase';
import GitHubButton from './GitHubButton';

const DeepObservatoryShowcase = () => (
	<div class={style.showcase}>
        <h2>DeepObservatory</h2>
        <div class={style.subtitle}>
            Nested observable propagation in Swift.<br/>
            Available for iOS 13 and higher.
        </div>
        <div class={style.badges}>
            <img src="https://flat.badgen.net/github/open-issues/quintschaf/deepobservatory?scale=1.4" />
            <img src="https://flat.badgen.net/github/closed-issues/quintschaf/deepobservatory?scale=1.4" />
        </div>
        <GitHubButton theme="light" href="https://github.com/quintschaf/DeepObservatory">
            View on GitHub
        </GitHubButton>
    </div>
);

export default DeepObservatoryShowcase;
