import { GET_RESTAURANTS, GET_RESTAURANT_DETAILS } from '../actions';

const initialState = {
    restaurants: null,
    selectedRestaurant: null,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_RESTAURANTS:
            return {
                ...state,
                restaurants: action.payload,
            };
        case GET_RESTAURANT_DETAILS:
            return {
                ...state,
                selectedRestaurant: action.payload,
            };
        default:
            return state;
    }
};
