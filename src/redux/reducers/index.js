import { combineReducers } from 'redux';

import userReducer from './user';
import restaurantReducer from './restaurant';

export default combineReducers({
    user: userReducer,
    restaurant: restaurantReducer,
});
