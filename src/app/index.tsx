import HeroesList from "@/components/heroes-list";
import styles from "./app.module.scss";
import HeroesAddForm from "@/components/heroes-add-form";
import HeroesFilters from "@/components/heroes-filters";



const App = () => {
	return (
		<main className={styles.app}>
			<div className={styles.content}>
				<HeroesList />
				<div className={styles.content__interactive}>
					<HeroesAddForm />
					<HeroesFilters />
				</div>
			</div>
		</main>
	);
};


export default App;