import style from '../scss/AppDrawer';
import AppSymbol from './AppSymbol';

const AppDrawer = () => (
	<div class={style.drawer}>
        <h2>Apps</h2>
        {/* <span class={style.subtitle}>
            Take a look<br />
        </span> */}
        <div class={style.inner}>
            <AppSymbol
                name="9List"
                img="./../../assets/9list.svg"
                href="/app/9list"
                showShadow={true}
                showName={true}
            />
            <AppSymbol
                name="MyKeyboard"
                img="./../../assets/mykeyboard.svg"
                href="/app/mykeyboard"
                showShadow={true}
                showName={true}
                showBetaBadge={false}
            />
            <AppSymbol
                name="Chatalyzer"
                img="./../../assets/chatalyzer.svg"
                href="/app/chatalyzer"
                showShadow={true}
                showName={true}
                showBetaBadge={false}
            />
        </div>
    </div>
);

export default AppDrawer;
