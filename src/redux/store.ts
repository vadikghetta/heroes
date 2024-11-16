import { configureStore } from "@reduxjs/toolkit";
import heroes from "./slices/heroesSlice";
import filters from "./slices/filtersSlice";



export const store = configureStore({
	reducer: {
		heroes,
		filters
	},
	// eslint-disable-next-line no-undef
	devTools : process.env.NODE_ENV !== "production" 
});


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch