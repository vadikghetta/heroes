
import { useMemo } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import styles from "./styles.module.scss";
import HeroesListItem from "../heroes-list-item";
import Spinner from "../spinner";
import { useAppSelector } from "@/redux/hooks";
import { THeroesRoot } from "@/types/heroes";
import { useGetHeroesQuery, useDeleteHeroMutation } from "../../api/apiSlice";

const HeroesList = () => {

	const { data = [], isLoading, isError } = useGetHeroesQuery("heroes");
	const activeFilter = useAppSelector(state => state.filters.activeFilter);
	const [deleteHero] = useDeleteHeroMutation();
	const filteredHeroes = useMemo(() => {
		const filteredArr = data.slice();
		if (activeFilter === "all") {
			return filteredArr;
		} else {
			return filteredArr.filter(item => item.element === activeFilter);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [activeFilter, data]);

	const onDelete = (id: string) => {
		deleteHero(id);
	};
	if (isLoading) {
		return <Spinner />;
	} else if (isError) {
		return <h5 className="text-center mt-5">Ошибка загрузки</h5>;
	}

	const renderHeroesList = (arr: THeroesRoot) => {
		if (arr.length === 0) {
			return (
				<CSSTransition timeout={0} classNames={styles.hero}>
					<h5 className="text-center mt-5">Героев пока нет</h5>
				</CSSTransition>
			);
		}

		return arr.map(({ id, name, description, element }) => {
			return (
				<CSSTransition key={id} timeout={500} classNames={styles.hero}>
					<HeroesListItem name={name} description={description} element={element} onDelete={() => onDelete(id)} />
				</CSSTransition>
			);
		});
	};

	const elements = renderHeroesList(filteredHeroes);
	return <TransitionGroup component="ul">{elements}</TransitionGroup>;
};

export default HeroesList;