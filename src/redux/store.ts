import { configureStore } from "@reduxjs/toolkit";
import filters from "./slices/filtersSlice";
import {apiSlice} from "../api/apiSlice";



export const store = configureStore({
	reducer: {
		filters,
		[apiSlice.reducerPath] : apiSlice.reducer
	},
	middleware : getDefultMiddleware => getDefultMiddleware().concat(apiSlice.middleware),
	// eslint-disable-next-line no-undef
	devTools : process.env.NODE_ENV !== "production" 
});


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch