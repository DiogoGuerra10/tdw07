import { configureStore } from '@reduxjs/toolkit';
import balanceReducer from './ex3/Slice';


const store = configureStore({
    reducer: {
        saldo: balanceReducer,
        },
});

export default store;