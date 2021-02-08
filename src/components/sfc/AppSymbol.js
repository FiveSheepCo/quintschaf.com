import style from '../scss/AppSymbol.scss'
import { Link } from 'preact-router/match'

const AppSymbol = ({ name, img, href, showShadow, showName, showBetaBadge }) => (
    <div class={style.symbol}>
        <Link href={href} class={style.linkWrapper}>
            <div
                class={[style.iconWrapper, showShadow ? style.shadow : '']
                .filter(c => c != '')
                .join(' ')}
            >
                <img
                    alt={name}
                    src={img}
                    width={32}
                    height={32}
                    class={style.icon}
                />
            </div>
            { showBetaBadge && <span class={style.betaBadge}>Beta</span> }
            {showName && <span class={style.appName}>{name}</span>}
        </Link>
    </div>
)

export default AppSymbol
