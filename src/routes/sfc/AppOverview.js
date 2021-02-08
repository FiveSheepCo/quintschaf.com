import { h } from 'preact';
import style from '../scss/Home';
import AppDrawer from '../../components/sfc/AppDrawer';

const AppOverview = () => (
	<div class={style.appoverview}>
        <AppDrawer />
	</div>
);

export default AppOverview;