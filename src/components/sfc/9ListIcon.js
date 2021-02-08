import { h } from 'preact';
import style from '../scss/FeaturedIcon';

const NineListIcon = ({shadow = false}) => (
	<div class={[style.icon, style._9list, shadow ? style.shadow : ''].filter(c => c != '').join(' ')} />
);

export default NineListIcon;
