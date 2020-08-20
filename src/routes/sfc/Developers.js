import { h } from 'preact';
import style from '../scss/Developers';
import SchafKitShowcase from '../../components/sfc/SchafKitShowcase';
import DeepObservatoryShowcase from '../../components/sfc/DeepObservatoryShowcase';

const Developers = () => (
	<main class={style.main}>
        <h1>Open Source</h1>
        <div class={style.subtitle}>Giving back to the community.</div>
        <SchafKitShowcase />
        <DeepObservatoryShowcase />
	</main>
);

export default Developers;
