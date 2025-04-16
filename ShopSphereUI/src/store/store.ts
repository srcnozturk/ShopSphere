import { configureStore } from '@reduxjs/toolkit';
import { counterSlice } from '../pages/counter/counterSlice';
import { cartSlice } from '../pages/cart/cartSlice';
import { catalogSlice } from '../pages/catalog/catalogSlice';

export const store = configureStore({

reducer:{
    counter: counterSlice.reducer,
    cart:cartSlice.reducer,
    catalog: catalogSlice.reducer,
    }
})

 export type RootState = ReturnType<typeof store.getState>;
 export type AppDispatch = typeof store.dispatch;
