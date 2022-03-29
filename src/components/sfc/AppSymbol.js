import style from '../scss/AppSymbol.scss'
import { Link } from 'preact-router/match'

const AppSymbol = ({ name, img, href, showShadow = false, showName = false, showBetaBadge = false, size = 128, showBorder = true, borderRadius = "2rem" }) => (
    <div class={style.symbol}>
        <Link href={href} class={style.linkWrapper}>
            <div
                class={[style.iconWrapper, showShadow ? style.shadow : '']
                .filter(c => c != '')
                .join(' ')}
                style={{
                    width: `${size}px`,
                    height: `${size}px`,
                    maxWidth: `${size}px`,
                    maxHeight: `${size}px`,
                    borderRadius,
                    border: showBorder ? 'solid .2rem white' : 'none',
                }}
            >
                <img
                    alt={name}
                    src={img}
                    width={size}
                    height={size}
                    class={style.icon}
                    style={{
                        transform: `scale(0.25)`,
                        width: `${size * 4}px`,
                        height: `${size * 4}px`
                    }}
                />
            </div>
            {showBetaBadge && <span class={style.betaBadge}>Beta</span>}
            {showName && <span class={style.appName}>{name}</span>}
        </Link>
    </div>
)

export default AppSymbol
