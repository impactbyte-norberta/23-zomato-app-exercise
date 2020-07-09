// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { useHistory } from 'react-router-dom';

// import { userLogin } from '../../redux/actions';

// function Login() {
//     const dispatch = useDispatch();
//     const history = useHistory();

//     const [user, setUser] = useState({
//         email: '',
//         password: '',
//     });

//     const handleChange = (event) => {
//         setUser({
//             ...user,
//             [event.target.name]: event.target.value,
//         });
//     };

//     const handleSubmit = (event) => {
//         event.preventDefault();

//         dispatch(userLogin(user, history));
//     };

//     return (
//         <div>
//             <form onSubmit={handleSubmit}>
//                 <input
//                     type='text'
//                     name='email'
//                     id='email'
//                     value={user.email}
//                     onChange={handleChange}
//                     placeholder='Email'
//                 />
//                 <input
//                     type='text'
//                     name='password'
//                     id='password'
//                     value={user.password}
//                     onChange={handleChange}
//                     placeholder='Password'
//                 />
//                 <input type='submit' value='Submit' />
//             </form>
//         </div>
//     );
// }

// export default Login;

// =========================== CARA 2 ==================
// import React, { useState } from 'react';
// import { connect, useDispatch } from 'react-redux';
// import { useHistory } from 'react-router-dom';

// import { userLogin } from '../../redux/actions';

// function Login(props) {
//     const history = useHistory();
//     const [user, setUser] = useState({
//         email: '',
//         password: '',
//     });

//     const handleChange = (event) => {
//         setUser({
//             ...user,
//             [event.target.name]: event.target.value,
//         });
//     };

//     const handleSubmit = (event) => {
//         event.preventDefault();

//         props.userLogin(user, history);
//     };

//     return (
//         <div>
//             <form onSubmit={handleSubmit}>
//                 <input
//                     type='text'
//                     name='email'
//                     id='email'
//                     value={user.email}
//                     onChange={handleChange}
//                     placeholder='Email'
//                 />
//                 <input
//                     type='text'
//                     name='password'
//                     id='password'
//                     value={user.password}
//                     onChange={handleChange}
//                     placeholder='Password'
//                 />
//                 <input type='submit' value='Submit' />
//             </form>
//         </div>
//     );
// }

// export default connect(null, { userLogin })(Login);

// ============================ CARA 3 ==================
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { userLogin } from '../../redux/actions';

function Login(props) {
    const history = useHistory();
    const [user, setUser] = useState({
        email: '',
        password: '',
    });

    const handleChange = (event) => {
        setUser({
            ...user,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        props.login(user, history);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    name='email'
                    id='email'
                    value={user.email}
                    onChange={handleChange}
                    placeholder='Email'
                />
                <input
                    type='text'
                    name='password'
                    id='password'
                    value={user.password}
                    onChange={handleChange}
                    placeholder='Password'
                />
                <input type='submit' value='Submit' />
            </form>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: (user, history) => dispatch(userLogin(user, history)),
    };
};

export default connect(null, mapDispatchToProps)(Login);
