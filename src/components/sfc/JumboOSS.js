import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from '../scss/JumboOSS';

const JumboOSS = () => (
	<div class={style.jumbo}>
        <h2>Open Source</h2>
        <span class={style.subtitle}>
            Code, Libraries, Frameworks.<br/>
        </span>
        <p>
            At Quintschaf, we believe in open and community-driven software.<br/>
            This is our way of giving back to the awesome developers out there.
        </p>
        <Link class={style.moreLink} href="/developers">Discover Open Source Projects</Link>
    </div>
);

export default JumboOSS;
