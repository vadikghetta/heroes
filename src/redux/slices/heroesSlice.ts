import {createSlice , createAsyncThunk} from "@reduxjs/toolkit";
import {THeroesRoot} from "../../types/heroes";
import { ROUTES, TStatusType } from "@/types/general.types";
// import {useHttp} from "../../hooks";
import { API } from "@/api";

interface IHeroesInitialState {
    heroes : THeroesRoot
    heroesLoadingStatus : TStatusType
}
const initialState : IHeroesInitialState = {
	heroes : [],
	heroesLoadingStatus : "idle"
};


export const fetchHeroes = createAsyncThunk(
	"heroes/fetchHeroes",
	async () => {
		try {
			const request = await fetch(`${API}${ROUTES.HEROES}`);
			if(!request.ok) return;
			const result = await request.json();
			return result;
		}catch {
			return;
		}
	}
);


const heroesSlice = createSlice({
	name: "heroes",
	initialState,
	reducers: {
		heroCreated: (state, action) => {
			state.heroes.push(action.payload);
		},
		heroDeleted: (state, action) => {
			state.heroes = state.heroes.filter(item => item.id !== action.payload);
		}
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchHeroes.pending, state => {state.heroesLoadingStatus = "loading";})
			.addCase(fetchHeroes.fulfilled, (state, action) => {
				state.heroesLoadingStatus = "idle";
				state.heroes = action.payload;
			})
			.addCase(fetchHeroes.rejected, state => {
				state.heroesLoadingStatus = "error";
			})
			.addDefaultCase(() => {});
	}
});


const {actions, reducer} = heroesSlice;

export default reducer;
export const {
	heroCreated,
	heroDeleted
} = actions;