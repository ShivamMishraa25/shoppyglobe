import { createSlice } from "@reduxjs/toolkit";

// initialState as an array of { id, ...product, quantity }
const initialState = [];

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem: (state, action) => {
            const item = action.payload;
            const existing = state.find(i => i.id === item.id);
            if (existing) {
                existing.quantity = (existing.quantity || 1) + 1;
            } else {
                state.push({ ...item, quantity: 1 });
            }
        },
        removeItem: (state, action) => {
            const id = action.payload;
            const idx = state.findIndex(i => i.id === id);
            if (idx !== -1) {
                if (state[idx].quantity > 1) {
                    state[idx].quantity -= 1;
                } else {
                    state.splice(idx, 1);
                }
            }
        },
        clearCart: (state, action) => {
            return [];
        },
        deleteItem: (state, action) => {
            const id = action.payload;
            return state.filter(i => i.id !== id);
        }
    }
});

export const { addItem, removeItem, clearCart, deleteItem } = cartSlice.actions;

export default cartSlice.reducer;