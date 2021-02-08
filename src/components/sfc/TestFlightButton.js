import style from '../scss/TestFlightButton';

const TestFlightButton = ({href}) => (
	<a href={href} class={style.btn}>
        Join the Beta on TestFlight
    </a>
);

export default TestFlightButton;
