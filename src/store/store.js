import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from './pokemon/apiSlice'
import pokemonReducer from './pokemon/pokemonSlice'

export default configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        pokemon: pokemonReducer
    },
    devTools: true,
})