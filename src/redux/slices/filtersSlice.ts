import { API } from "@/api";
import { TFilterRoot, TTypeFilter } from "@/types/filters";
import { ROUTES, TStatusType } from "@/types/general.types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

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
export const fetchFilters = createAsyncThunk(
	"filters/fetchFilters",
	async () => {
		try {
			const request = await fetch(`${API}${ROUTES.FILTERS}`);
			if(!request.ok) {
				return;
			}
			const result = await request.json();
			return result;
		}catch {
			return; 
		}
	}
);

const filtersSlice = createSlice({
	name: "filters",
	initialState,
	reducers: {
		filtersChanged: (state, action) => {
			state.activeFilter = action.payload;
		}
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchFilters.pending, state => {state.filtersLoadingStatus = "loading";})
			.addCase(fetchFilters.fulfilled, (state, action) => {
				state.filtersLoadingStatus = "idle";
				state.filters = action.payload;
			})
			.addCase(fetchFilters.rejected, state => {
				state.filtersLoadingStatus = "error";
			})
			.addDefaultCase(() => {});
	}
});

const {actions, reducer} = filtersSlice;

export default reducer;
export const {
	filtersChanged
} = actions;