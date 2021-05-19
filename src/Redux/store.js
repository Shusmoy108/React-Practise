import {configureStore} from '@';
import { cartSlice } from './cartSlice';
import { restoSlice } from './restoSlice';

export default configureStore({
    reducers:{
        cart:cartSlice.reducer,
        resto:restoSlice.reducer
    }
});