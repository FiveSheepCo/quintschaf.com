import style from '../scss/SubscribeButton';

const SubscribeButton = ({children}) => (
	<a target="_blank" rel="noreferrer" href="https://eepurl.com/hbk8wT" class={style.btn}>
        {children}
    </a>
);

export default SubscribeButton;
