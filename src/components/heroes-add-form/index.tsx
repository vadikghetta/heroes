import { useCreateHeroMutation } from "@/api/apiSlice";
import { useAppSelector } from "@/redux/hooks";
import { IForm } from "@/types/general.types";
import { ChangeEvent, FormEvent, useState } from "react";


const HeroesAddForm = () => {
	const filters = useAppSelector(state => state.filters.filters);
	const [heroFormState, setHeroFormState] = useState<IForm>({
		name: "",
		description: "",
		element: "all"
	});

	const changeForm = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
		setHeroFormState({ ...heroFormState, [e.target.name]: e.target.value });
	};


	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [createHero, { isLoading }] = useCreateHeroMutation();
	const onSubmitHandler = (e: FormEvent) => {
		e.preventDefault();
		createHero(heroFormState).unwrap();
		setHeroFormState({
			name: "",
			description: "",
			element: "all"
		});
	};

	return (
		<form className="border p-4 shadow-lg rounded" onSubmit={onSubmitHandler}>
			<div className="mb-3">
				<label htmlFor="name" className="form-label fs-4">Имя нового героя</label>
				<input
					readOnly={isLoading}
					required
					type="text"
					name="name"
					className="form-control"
					id="name"
					placeholder="Как меня зовут?"
					value={heroFormState.name}
					onChange={changeForm} />
			</div>

			<div className="mb-3">
				<label htmlFor="text" className="form-label fs-4">Описание</label>
				<textarea
					required
					name="description"
					className="form-control"
					id="text"
					readOnly={isLoading}
					placeholder="Что я умею?"
					style={{ "height": "130px" }}
					value={heroFormState.description}
					onChange={changeForm} />
			</div>

			<div className="mb-3">
				<label htmlFor="element" className="form-label">Выбрать элемент героя</label>
				<select
					required
					className="form-select"
					id="element"
					name="element"
					value={heroFormState.element}
					onChange={changeForm}>
					<option value="">Я владею элементом...</option>
					{filters.map(item => (
						<option key={item.id} value={item.name}>
							{item.label}
						</option>
					))}
				</select>
			</div>

			<button type="submit" disabled={isLoading} className="btn btn-primary">Создать</button>
		</form>
	);
};
export default HeroesAddForm;