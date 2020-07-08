import { USER_LOGIN } from './types';

export const userLogin = (userData, history) => async (dispatch) => {
    const url = `https://5ee3991f5dd8b800160824ac.mockapi.io/api/users`;

    const response = await fetch(url);
    const results = await response.json();

    const checkUser = results.filter(
        (result) => result.email === userData.email
    );

    if (checkUser.length > 0) {
        if (checkUser[0].password === userData.password) {
            dispatch({
                type: USER_LOGIN,
                payload: checkUser[0],
            });

            localStorage.setItem(
                'user',
                JSON.stringify({
                    name: checkUser[0].name,
                    email: checkUser[0].email,
                })
            );

            history.push('/home');
        }
    }
};

export const registerUser = (userData, history) => async (dispatch) => {
    const url = `https://5ee3991f5dd8b800160824ac.mockapi.io/api/users`;

    const options = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(userData),
    };

    const response = await fetch(url, options);

    if (response.status === 201) {
        alert('Terima kasih sudah mendaftar');
        history.push('/login');
    }
};
