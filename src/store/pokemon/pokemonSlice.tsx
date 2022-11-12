/* eslint-disable @typescript-eslint/no-unused-expressions */
import { createSlice } from '@reduxjs/toolkit'
import { dataDummy } from '../../dummy'

const initialState = {
    data: [...dataDummy],
    newStock: {},
}

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
    updateOne: (state, action: any) => {
        const index = state.data.findIndex((item: any) => item.name === action.payload.name);
        state.data[index].history.push(action.payload.history);
        state.data[index] = {...state.data[index], stok: action.payload.stok};
    },
    newStock: (state, action) => {
      state.newStock = action.payload;
    },
    reset: state => {state.data = []} 
  },
})

export const { setData, updateOne, newStock, reset } = pokemonSlice.actions

export const selectAllPokemon = (state: { pokemon: any; }) => state.pokemon.data;
export const selectNewStock = (state: { pokemon: any; }) => state.pokemon.newStock;

export default pokemonSlice.reducer