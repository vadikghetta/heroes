import { useState } from "react";
import styles from "./App.module.scss";


const App = () => {
	const [count, setCount] = useState(0);
	return (
		<main className={styles.main}>
			<h1 className={styles.title}>Hello Its my react starter</h1>
			<img className={styles.logo} src="/assets/react_logo.png" alt="react" width={280} height={250} />
			<div className={styles.counter}>
				<p className={styles.count}>Count is {count}</p>
				<button className={styles.btn} onClick={() => {
					setCount(state => state + 1);
				}}>Click</button>
			</div>
		</main>
	);
};


export default App;