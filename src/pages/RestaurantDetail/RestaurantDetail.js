import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { getRestaurantDetails } from '../../redux/actions';

function RestaurantDetail() {
    let { id } = useParams();
    const dispatch = useDispatch();
    const restaurantDetails = useSelector(
        (state) => state.restaurant.selectedRestaurant
    );

    useEffect(() => {
        dispatch(getRestaurantDetails(id));

        // eslint-disable-next-line
    }, []);

    const restaurantView = restaurantDetails !== null && (
        <>
            <img src={restaurantDetails.thumb} alt={restaurantDetails.name} />
            <h1>{restaurantDetails.name}</h1>
            <p>{restaurantDetails.location.address}</p>
            <p>
                Average price for 2 persons:{' '}
                {restaurantDetails.average_cost_for_two}
            </p>
        </>
    );

    return <div>{restaurantView}</div>;
}

export default RestaurantDetail;

// ===================== CARA 2 =====================

// import React, { useEffect } from 'react';
// import { connect } from 'react-redux';
// import { useParams } from 'react-router-dom';

// import { getRestaurantDetails } from '../../redux/actions';

// function RestaurantDetail(props) {
//     let { id } = useParams();

//     useEffect(() => {
//         props.getRestaurantDetails(id);

//         // eslint-disable-next-line
//     }, []);

//     const restaurantView = props.restaurantDetails !== null && (
//         <>
//             <img
//                 src={props.restaurantDetails.thumb}
//                 alt={props.restaurantDetails.name}
//             />
//             <h1>{props.restaurantDetails.name}</h1>
//             <p>{props.restaurantDetails.location.address}</p>
//             <p>
//                 Average price for 2 persons:{' '}
//                 {props.restaurantDetails.average_cost_for_two}
//             </p>
//         </>
//     );

//     return <div>{restaurantView}</div>;
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         getRestaurantDetails: (id) => dispatch(getRestaurantDetails(id)),
//     };
// };

// const mapStateToProps = (state) => {
//     return {
//         restaurantDetails: state.restaurant.selectedRestaurant,
//     };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(RestaurantDetail);
