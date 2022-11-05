import { combineReducers } from 'redux';
import authReducer from './authReducer';
import productReducer from './productReducer';
import categoryReducer from './categoryReducer';
import transactionReducer from './transactionReducer';

export default combineReducers({
    auth: authReducer,
    product: productReducer,
    category: categoryReducer,
    transaction: transactionReducer
});