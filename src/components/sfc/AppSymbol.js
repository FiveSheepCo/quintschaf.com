import style from '../scss/AppSymbol.scss'
import { Link } from 'preact-router/match'

const AppSymbol = ({ name, img, href, showShadow, showName }) => (
    <div class={style.symbol}>
        <Link href={href} class={style.linkWrapper}>
            <img
                alt={name}
                src={img}
                class={[style.icon, showShadow ? style.shadow : '']
                    .filter(c => c != '')
                    .join(' ')}
            />
            {showName && <span class={style.appName}>{name}</span>}
        </Link>
    </div>
)

export default AppSymbol
