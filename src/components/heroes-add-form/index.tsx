import { FormEvent, useState } from "react";

const HeroesAddForm = () => {

	const [heroName, setHeroName] = useState<string>("");
	const [heroDescr, setHeroDescr] = useState("");
	const [heroElement, setHeroElement] = useState("");

	const onSubmitHandler = (e: FormEvent) => {
		e.preventDefault();
	};
	return (
		<form className="border p-4 shadow-lg rounded" onSubmit={onSubmitHandler}>
			<div className="mb-3">
				<label htmlFor="name" className="form-label fs-4">Имя нового героя</label>
				<input
					required
					type="text"
					name="name"
					className="form-control"
					id="name"
					placeholder="Как меня зовут?"
					value={heroName}
					onChange={(e) => setHeroName(e.target.value)} />
			</div>

			<div className="mb-3">
				<label htmlFor="text" className="form-label fs-4">Описание</label>
				<textarea
					required
					name="text"
					className="form-control"
					id="text"
					placeholder="Что я умею?"
					style={{ "height": "130px" }}
					value={heroDescr}
					onChange={(e) => setHeroDescr(e.target.value)} />
			</div>

			<div className="mb-3">
				<label htmlFor="element" className="form-label">Выбрать элемент героя</label>
				<select
					required
					className="form-select"
					id="element"
					name="element"
					value={heroElement}
					onChange={(e) => setHeroElement(e.target.value)}>
					<option value="">Я владею элементом...</option>
					{/* {renderFilters(filters, filtersLoadingStatus)} */}
				</select>
			</div>

			<button type="submit" className="btn btn-primary">Создать</button>
		</form>
	);
};
export default HeroesAddForm;