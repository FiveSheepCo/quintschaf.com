import { h } from 'preact';
import style from '../scss/FeaturedIcon';

const MyKeyboardIcon = ({shadow = false}) => (
	<div class={[style.icon, style._mykeyboard, shadow ? style.shadow : ''].filter(c => c != '').join(' ')} />
);

export default MyKeyboardIcon;
