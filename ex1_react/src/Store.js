import { configureStore } from '@reduxjs/toolkit';
import balanceReducer from './ex3/Slice';
import catReducer from './ex4/CatSlice';
import { catApi } from './ex5/CatApi'; // Importe o serviço RTK Query

const store = configureStore({
  reducer: {
    saldo: balanceReducer,
    cats: catReducer,
    [catApi.reducerPath]: catApi.reducer, // Adicione o reducer RTK Query
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(catApi.middleware), // Adicione o middleware RTK Query
});

export default store;