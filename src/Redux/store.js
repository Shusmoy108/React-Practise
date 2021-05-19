// import {configureStore} from '@';
// import { cartSlice } from './cartSlice';
// import { restoSlice } from './restoSlice';

// export default configureStore({
//     reducers:{
//         cart:cartSlice.reducer,
//         resto:restoSlice.reducer
//     }
// });
import thunk from "redux-thunk" 
import { createStore, applyMiddleware} from 'redux'
import reducer from './reducers'
const store= createStore(reducer,applyMiddleware(thunk))
export default store;