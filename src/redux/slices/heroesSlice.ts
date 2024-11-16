import {createSlice} from "@reduxjs/toolkit";
import {THeroesRoot} from "../../types/heroes";
import { TStatusType } from "@/types/general.types";

interface IHeroesInitialState {
    heroes : THeroesRoot
    heroesLoadingStatus : TStatusType
}
const initialState : IHeroesInitialState = {
	heroes : [],
	heroesLoadingStatus : "idle"
};

const heroesSlice = createSlice({
	name : "heroes",
	initialState,
	reducers : {
		heroesFetching: state => {state.heroesLoadingStatus = "loading";},
		heroesFetched: (state, action) => {
			state.heroesLoadingStatus = "idle";
			state.heroes = action.payload;
		},
		heroesFetchingError: state => {
			state.heroesLoadingStatus = "error";
		},
		heroCreated: (state, action) => {
			state.heroes.push(action.payload);
		},
		heroDeleted: (state, action) => {
			state.heroes = state.heroes.filter(item => item.id !== action.payload);
		}
	}
});


const {actions, reducer} = heroesSlice;

export default reducer;
export const {
	heroesFetching,
	heroesFetched,
	heroesFetchingError,
	heroCreated,
	heroDeleted
} = actions;