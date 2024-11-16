
import { useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import {
	// heroDeleted,
	fetchHeroes
} from "../../redux/slices/heroesSlice";

import HeroesListItem from "../heroes-list-item";
import Spinner from "../spinner";

import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { IHeroesItem, THeroesRoot } from "@/types/heroes";
import { createSelector } from "@reduxjs/toolkit";
import { TElement } from "@/types/general.types";

const HeroesList = () => {

	const filteredHeroesSelector = createSelector(
		(state) => state.filters.activeFilter,
		(state) => state.heroes.heroes,
		(filter: TElement, heroes) => {
			if (filter === "all") {
				return heroes;
			} else {
				return heroes.filter((item: IHeroesItem) => item.element === filter);
			}
		}
	);
	const filteredHeroes = useAppSelector(filteredHeroesSelector);
	const heroesLoadingStatus = useAppSelector(
		(state) => state.heroes.heroesLoadingStatus
	);

	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(fetchHeroes());
		// eslint-disable-next-line
	}, []);

	// const onDelete = useCallback(
	// 	(id : number) => {
	// 		request(`http://localhost:3001/heroes/${id}`, "DELETE")
	// 			.then((data) => console.log(data, "Deleted"))
	// 			.then(dispatch(heroDeleted(id)))
	// 			.catch((err) => console.log(err));
	// 		// eslint-disable-next-line
	// 	},
	// 	[request]
	// );

	const onDelete = (id: string) => {
		console.log(id);
	};
	if (heroesLoadingStatus === "loading") {
		return <Spinner />;
	} else if (heroesLoadingStatus === "error") {
		return <h5 className="text-center mt-5">Ошибка загрузки</h5>;
	}

	const renderHeroesList = (arr: THeroesRoot) => {
		if (arr.length === 0) {
			return (
				<CSSTransition timeout={0} classNames="hero">
					<h5 className="text-center mt-5">Героев пока нет</h5>
				</CSSTransition>
			);
		}

		return arr.map(({ id, name, description, element }) => {
			return (
				<CSSTransition key={id} timeout={500} classNames="hero">
					<HeroesListItem name={name} description={description} element={element} onDelete={() => onDelete(id)} />
				</CSSTransition>
			);
		});
	};

	const elements = renderHeroesList(filteredHeroes);
	return <TransitionGroup component="ul">{elements}</TransitionGroup>;
};

export default HeroesList;