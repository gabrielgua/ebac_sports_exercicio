import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type FavoritosState = {
  itens: Produto[]
}

const initialState: FavoritosState = {
  itens: []
}

const favoritosSlice = createSlice({
  name: 'favoritos',
  initialState,
  reducers: {
    favoritar: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload

      if (state.itens.find((f) => f.id === produto.id)) {
        state.itens = state.itens.filter((p) => p.id != produto.id)
        return
      }

      state.itens = [...state.itens, produto]
    }
  }
})

export const { favoritar } = favoritosSlice.actions
export default favoritosSlice.reducer
