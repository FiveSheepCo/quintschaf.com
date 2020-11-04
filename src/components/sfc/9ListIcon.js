import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from '../scss/9ListIcon';

const NineListIcon = ({shadow = false}) => (
	<div class={[style.icon, shadow ? style.shadow : ''].filter(c => c != '').join(' ')} />
);

export default NineListIcon;
