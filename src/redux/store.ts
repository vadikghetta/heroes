import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/counterSlice";




export const store = configureStore({
	reducer: {
		counter : counterSlice
	},
	// eslint-disable-next-line no-undef
	devTools : process.env.NODE_ENV !== "production" 
});


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch