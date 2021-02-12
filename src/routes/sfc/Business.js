import { h } from 'preact';
import style from '../scss/Business';

const Business = () => (
	<div class={style.business}>
        <h1>Business Contact</h1>
        <p>
            Want to do business with us?<br /><br />
            We do consulting, native iOS development and full stack web.
            Let's get your team up to speed or talk about your app idea!<br /><br />
            Contact us at&nbsp;
            <a
                class={style.businessLink}
                href="mailto:business@quintschaf.com">
                business@quintschaf.com
            </a>.
        </p>
	</div>
);

export default Business;