import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'https://api.thecatapi.com/v1/images/search';
const API_KEY = 'live_x9msivLWLpfxJh9GkiAZTL2vdRn3opXEffSjRY2kCGdNRHXjmkkAekdCx6NrcO9B'

//Thunk assíncrono para ir buscar imagens dos gatos
export const fetchCats = createAsyncThunk(
    'cats/fetchCats', //Nome da action
    async (page, { rejectWithValue }) => { //Função que vai buscar as imagens
      try {
        const response = await axios.get(`${API_URL}?limit=1&page=${page}`, {
          headers: {
            'x-api-key': API_KEY,
          },
        });
        return response.data;
      } catch (error) {
        return rejectWithValue(error.response.data);
      }
    }
  );

  //Slice para os gatos
  const catSlice = createSlice({
    name: 'cats',
    initialState: { // Estado inical
      cats: [], // Array vazio
      status: 'idle',// Estado de requisição
      error: null, //Erro da requisição
      page: 1,//Numero da página
    },
    reducers: {
      nextPage: (state) => {
        state.page += 1; //Incrementa a página
      },
      prevPage: (state) => {
        if (state.page > 1) state.page -= 1; //Decrementa a página
      },
    },
    extraReducers: (builder) => {
      builder
        .addCase(fetchCats.pending, (state) => {
          state.status = 'loading'; //Estado como loading quando a requisição está em andamento
        })
        .addCase(fetchCats.fulfilled, (state, action) => {
          state.status = 'succeeded'; //Estado como succeeded quando a requisição foi bem sucedida
          state.cats = action.payload; //Atualiza o estado com as imagens dos gatos
        })
        .addCase(fetchCats.rejected, (state, action) => {
          state.status = 'failed'; //Estado como failed quando a requisição falha
          state.error = action.payload; //Atualiza o estado com o erro
        });
    },
  });
  
  export const { nextPage, prevPage } = catSlice.actions;
  
  export default catSlice.reducer;