import style from '../scss/AppStoreButton';

const AppStoreButton = ({href}) => (
	<a href={href} class={style.btn}>
        <img src="../../assets/dl_appstore_us.svg" />
    </a>
);

export default AppStoreButton;
