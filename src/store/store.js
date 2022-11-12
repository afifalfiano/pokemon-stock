import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from './pokemon/apiSlice'
import pokemonReducer from './pokemon/pokemonSlice'
import screenReducer from './screen/screenSlice'

export default configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        pokemon: pokemonReducer,
        screen: screenReducer,
    },
    devTools: true,
})