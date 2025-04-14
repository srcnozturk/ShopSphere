import { createSlice } from "@reduxjs/toolkit";

export interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0, // Initial value of the counter
};

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1; // Increment the counter value by 1
        },
        decrement: (state) => {
            state.value -= 1; // Decrement the counter value by 1
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload; // Increment the counter value by a specified amount
        }
    }
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions; // Exporting the actions for use in components