import { API } from "@/constants";
import { IForm, METODS_CONSTANTS, ROUTES } from "@/types/general.types";
import {  THeroesRoot } from "@/types/heroes";
import { createApi, fetchBaseQuery  } from "@reduxjs/toolkit/query/react";


export const apiSlice = createApi({
	reducerPath : "api",
	baseQuery : fetchBaseQuery({baseUrl : API}),
	tagTypes : ["Heroes"],
	endpoints : (builder) => ({
		getHeroes : builder.query<THeroesRoot , void>({
			query : () => ROUTES.HEROES,
			providesTags : ["Heroes"]
		}),
		createHero : builder.mutation<IForm, Partial<IForm>>({
			query :  hero => ({
				url: ROUTES.HEROES,
				method : METODS_CONSTANTS.POST,
				body : hero
			}),
			invalidatesTags : ["Heroes"]
		}),
		deleteHero : builder.mutation<IForm, string>({
			query : id => ({
				url : `${ROUTES.HEROES}/${id}`,
				method : METODS_CONSTANTS.DELETE
			}),
			invalidatesTags : ["Heroes"]
		})
	})
});


export const {useGetHeroesQuery , useCreateHeroMutation , useDeleteHeroMutation} = apiSlice;