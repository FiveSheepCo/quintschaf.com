import { h } from 'preact';
import style from '../scss/Developers';
import SchafKitShowcase from '../../components/sfc/SchafKitShowcase';
import DeepObservatoryShowcase from '../../components/sfc/DeepObservatoryShowcase';
import IntrospectShowcase from '../../components/sfc/IntrospectShowcase';
import HackerNewsApiShowcase from '../../components/sfc/HackerNewsApiShowcase';

const Developers = () => (
	<main class={style.main}>
        <h1>Open Source</h1>
        <div class={style.subtitle}>Giving back to the community.</div>
        <SchafKitShowcase />
        <IntrospectShowcase />
        <HackerNewsApiShowcase />
        <DeepObservatoryShowcase />
	</main>
);

export default Developers;
