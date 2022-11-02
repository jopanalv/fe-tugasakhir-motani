import { combineReducers } from 'redux';
import authReducer from './authReducer';
import productReducer from './productReducer';
import categoryReducer from './categoryReducer';

export default combineReducers({
    auth: authReducer,
    product: productReducer,
    category: categoryReducer,
});