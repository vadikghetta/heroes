import styles from "./app.module.scss";
import { API } from "@/api";



const App = () => {
	console.log(API);
	return (
		<main className={styles.app}>
			<div className={styles.content}>
				{/* <HeroesList /> */}
				<div className={styles.content__interactive}>
					{/* <HeroesAddForm /> */}
					{/* <HeroesFilters /> */}
				</div>
			</div>
		</main>
	);
};


export default App;