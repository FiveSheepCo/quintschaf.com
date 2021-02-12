import { h } from 'preact';
import style from '../scss/Support';

const Support = () => (
	<div class={style.support}>
        <h1>Support</h1>
        <p>
            Do you need help with any of our apps?<br /><br />
            Feel free to report bugs, submit feature requests or just tell us
            how you feel about our apps. We're always open to new ideas.
        </p>
        <a
            class={style.supportBtn}
            href="https://bcrw.apple.com/urn:biz:c28a6efb-69f3-4172-848a-35f29699860b?biz-intent-id=support">
            <img class={style.logo} src="./../../assets/logo.svg" />Contact us on iMessage
        </a>
        <div>
            <sub>You can contact us in English or German language.</sub>
        </div>
        <p>
            If you can't use iMessage, just send us an email:<br />
            <a class={style.supportEmail} href="mailto:support@quintschaf.com">support@quintschaf.com</a>
        </p>
	</div>
);

export default Support;