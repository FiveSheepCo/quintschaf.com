import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from '../scss/PageWrapper';

const PageWrapper = ({children}) => (
    <div class={style.wrappedContent}>
        {children}
    </div>
);

export default PageWrapper;
