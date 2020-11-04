import style from '../scss/NewsletterBox';
import SubscribeButton from './SubscribeButton';

const NewsletterBox = () => (
	<div class={style.box}>
        <h2>Newsletter</h2>
        <span class={style.subtitle}>
            Get updates on the stuff we're working on<br />
        </span>
        <SubscribeButton>
            Subscribe to our Newsletter
        </SubscribeButton>
        {/* <AppStoreButton href="#todo"/> */}
    </div>
);

export default NewsletterBox;
