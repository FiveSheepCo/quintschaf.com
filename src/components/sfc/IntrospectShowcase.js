import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from '../scss/DeepObservatoryShowcase';
import GitHubButton from './GitHubButton';

const IntrospectShowcase = () => (
	<div class={style.showcase}>
        <h2>SwiftUI Introspect</h2>
        <div class={style.subtitle}>
            Access underlying UIKit components in SwiftUI.<br />
        </div>
        <div class={style.subtitle}>
            <br />
            We are proud to announce that we @quintschaf<br />
            became the maintainers of the popular <kbd>SwiftUI-Introspect</kbd><br />
            package built by the awesome team @siteline.
        </div>
        <div class={style.badges}>
            <img src="https://flat.badgen.net/github/open-issues/siteline/swiftui-introspect?scale=1.4" />
            <img src="https://flat.badgen.net/github/closed-issues/siteline/swiftui-introspect?scale=1.4" />
        </div>
        <GitHubButton theme="light" href="https://github.com/siteline/swiftui-introspect">
            View on GitHub
        </GitHubButton>
    </div>
);

export default IntrospectShowcase;
