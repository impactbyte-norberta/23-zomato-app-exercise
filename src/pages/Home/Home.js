import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { getRestaurants } from '../../redux/actions';

function Home() {
    const dispatch = useDispatch();
    const restaurants = useSelector((state) => {
        return state.restaurant.restaurants;
    });

    useEffect(() => {
        dispatch(getRestaurants());

        // eslint-disable-next-line
    }, []);

    const restaurantList =
        restaurants !== null &&
        restaurants.map((restaurant) => {
            return (
                <Link
                    key={restaurant.restaurant.id}
                    to={`/restaurants/${restaurant.restaurant.id}`}
                >
                    <img
                        src={restaurant.restaurant.thumb}
                        alt={restaurant.restaurant.name}
                    />
                    <h1>Nama:{restaurant.restaurant.name}</h1>
                </Link>
            );
        });
    return <div>{restaurantList}</div>;
}

export default Home;

// =================== CARA 2 ======================
// import React, { useEffect } from 'react';
// import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';

// import { getRestaurants } from '../../redux/actions';

// function Home(props) {
//     useEffect(() => {
//         props.getRestaurants();

//         // eslint-disable-next-line
//     }, []);

//     const restaurants =
//         props.restaurants !== null &&
//         props.restaurants.map((restaurant) => {
//             return (
//                 <Link
//                     key={restaurant.restaurant.id}
//                     to={`/${restaurant.restaurant.id}`}
//                 >
//                     <img
//                         src={restaurant.restaurant.thumb}
//                         alt={restaurant.restaurant.name}
//                     />
//                     <h1>Nama:{restaurant.restaurant.name}</h1>
//                 </Link>
//             );
//         });
//     return <div>{restaurants}</div>;
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         getRestaurants: () => dispatch(getRestaurants()),
//     };
// };

// const mapStateToProps = (state) => {
//     return {
//         restaurants: state.restaurant.restaurants,
//     };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Home);
