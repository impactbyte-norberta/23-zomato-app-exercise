// ==================== CARA 1 ===================

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { registerUser } from '../../redux/actions';

function Registration() {
    const history = useHistory();
    const dispatch = useDispatch();

    const [user, setUser] = useState({
        name: '',
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

        dispatch(registerUser(user, history));
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    name='name'
                    id='name'
                    value={user.name}
                    onChange={handleChange}
                    placeholder='Nama Lengkap'
                />
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

export default Registration;

// ===================== CARA 2 ===================

// import React, { useState } from 'react';
// import { connect } from 'react-redux';
// import { useHistory } from 'react-router-dom';

// import { registerUser } from '../../redux/actions';

// function Registration(props) {
//     const history = useHistory();
//     const [user, setUser] = useState({
//         name: '',
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

//         props.registerUser(user, history);
//     };

//     return (
//         <div>
//             <form onSubmit={handleSubmit}>
//                 <input
//                     type='text'
//                     name='name'
//                     id='name'
//                     value={user.name}
//                     onChange={handleChange}
//                     placeholder='Nama Lengkap'
//                 />
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

// export default connect(null, { registerUser })(Registration);

// ==================== CARA 3 =====================

// import React, { useState } from 'react';
// import { connect } from 'react-redux';
// import { useHistory } from 'react-router-dom';

// import { registerUser } from '../../redux/actions';

// function Registration(props) {
//     const history = useHistory();
//     const [user, setUser] = useState({
//         name: '',
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

//         props.register(user, history);
//     };

//     return (
//         <div>
//             <form onSubmit={handleSubmit}>
//                 <input
//                     type='text'
//                     name='name'
//                     id='name'
//                     value={user.name}
//                     onChange={handleChange}
//                     placeholder='Nama Lengkap'
//                 />
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

// const mapDispatchToProps = (dispatch) => {
//     return {
//         register: (user, history) => dispatch(registerUser(user, history)),
//     };
// };

// export default connect(null, mapDispatchToProps)(Registration);
