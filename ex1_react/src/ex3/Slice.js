import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    balance: 0,
};

const balanceSlice = createSlice({ 
    name: "balance",
    initialState,
    reducers: {
        deposito: (state, action) => {
            state.balance += action.payload; // Incrementa o saldo
        },
        levantamento: (state, action) => {
            if(state.balance >= action.payload) {
                state.balance -= action.payload; // Decrementa o saldo
            } else {
                alert("Saldo insuficiente");
            }
        },
    },
});

export const { deposito, levantamento } = balanceSlice.actions; // Exporta as actions
export default balanceSlice.reducer;