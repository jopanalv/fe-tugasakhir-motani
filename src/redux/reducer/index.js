import { combineReducers } from 'redux';
import authReducer from './authReducer';
import productReducer from './productReducer';
import categoryReducer from './categoryReducer';
import transactionReducer from './transactionReducer';
import userReducer from './userReducer';
import bannerReducer from './bannerReducer';
import reviewReducer from './reviewReducer';

export default combineReducers({
    auth: authReducer,
    product: productReducer,
    category: categoryReducer,
    transaction: transactionReducer,
    user: userReducer,
    banner: bannerReducer,
    review: reviewReducer
});