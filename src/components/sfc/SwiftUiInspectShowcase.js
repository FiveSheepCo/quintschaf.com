import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from '../scss/Showcase';
import GitHubButton from './GitHubButton';

const SwiftUiInspectShowcase = () => (
	<div class={style.showcase}>
        <h2>SwiftUI Inspect</h2>
        <div class={style.subtitle}>
            Access underlying UIKit components in SwiftUI.<br />
            Better introspection with a clean API and no baggage.
        </div>
        <div class={style.badges}>
            <img src="https://badgers.space/github/open-issues/quintschaf/swiftui-inspect?scale=1.4" />
            <img src="https://badgers.space/github/closed-issues/quintschaf/swiftui-inspect?scale=1.4" />
        </div>
        <GitHubButton theme="light" href="https://github.com/quintschaf/swiftui-inspect">
            View on GitHub
        </GitHubButton>
    </div>
);

export default SwiftUiInspectShowcase;
