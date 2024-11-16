import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { fetchFilters, filtersChanged } from "@/redux/slices/filtersSlice";
import { useEffect } from "react";
import Spinner from "../spinner";
import { TFilterRoot } from "@/types/filters";
import clsx from "clsx";



const HeroesFilters = () => {

	const { filters, filtersLoadingStatus, activeFilter } = useAppSelector(state => state.filters);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(fetchFilters());

		// eslint-disable-next-line
	}, []);

	if (filtersLoadingStatus === "loading") {
		return <Spinner />;
	} else if (filtersLoadingStatus === "error") {
		return <h5 className="text-center mt-5">Ошибка загрузки</h5>;
	}

	const renderFilters = (arr: TFilterRoot) => {
		if (arr.length === 0) {
			return <h5 className="text-center mt-5">Фильтры не найдены</h5>;
		}

		return arr.map(({ name, className, label }) => {

			const btnClass = clsx("btn", className, {
				"active": name === activeFilter
			});

			return <button
				key={name}
				id={name}
				className={btnClass}
				onClick={() => dispatch(filtersChanged(name))}
			>{label}</button>;
		});
	};

	const elements = renderFilters(filters);

	return (
		<div className="card shadow-lg mt-4">
			<div className="card-body">
				<p className="card-text">Отфильтруйте героев по элементам</p>
				<div className="btn-group">
					{elements}
				</div>
			</div>
		</div>
	);
};

export default HeroesFilters;