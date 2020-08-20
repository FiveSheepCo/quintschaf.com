import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from '../scss/SubscribeButton';

const SubscribeButton = ({href, children}) => (
	<a target="_blank" href={href} class={style.btn}>
        {children}
    </a>
);

export default SubscribeButton;
