import { TFilterRoot, TTypeFilter } from "@/types/filters";
import { TStatusType } from "@/types/general.types";
import { createSlice } from "@reduxjs/toolkit";

interface IInitialState {
    filters : TFilterRoot
    filtersLoadingStatus : TStatusType
    activeFilter : TTypeFilter
}



const initialState : IInitialState = {
	filters: [],
	filtersLoadingStatus: "idle",
	activeFilter: "all"
};

const filtersSlice = createSlice({
	name: "filters",
	initialState,
	reducers: {
		filtersFetching: state => {state.filtersLoadingStatus = "loading";},
		filtersFetched: (state, action) => {
			state.filtersLoadingStatus = "idle";
			state.filters = action.payload;
		},
		filtersFetchingError: state => {
			state.filtersLoadingStatus = "error";
		},
		filtersChanged: (state, action) => {
			state.activeFilter = action.payload;
		}
	}
});

const {actions, reducer} = filtersSlice;

export default reducer;
export const {
	filtersFetching,
	filtersFetched,
	filtersFetchingError,
	filtersChanged
} = actions;