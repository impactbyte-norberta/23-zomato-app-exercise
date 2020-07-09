import { GET_RESTAURANTS, GET_RESTAURANT_DETAILS } from './types';

export const getRestaurants = () => async (dispatch) => {
    let url =
        'https://developers.zomato.com/api/v2.1/search?entity_id=74&entity_type=city';

    let options = {
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
            'user-key': process.env.REACT_APP_ZOMATO_KEY,
        },
    };

    let response = await fetch(url, options);
    let results = await response.json();

    dispatch({
        type: GET_RESTAURANTS,
        payload: results.restaurants,
    });
};

export const getRestaurantDetails = (id) => async (dispatch) => {
    let url = `https://developers.zomato.com/api/v2.1/restaurant?res_id=${id}`;

    let options = {
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
            'user-key': process.env.REACT_APP_ZOMATO_KEY,
        },
    };

    let response = await fetch(url, options);
    let results = await response.json();

    dispatch({
        type: GET_RESTAURANT_DETAILS,
        payload: results,
    });
};
