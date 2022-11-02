// import jwtDecode from 'jwt-decode';

const initialState = {
    user: JSON.parse(localStorage.getItem('user')),
    isLoged: !!localStorage.getItem('accessToken'),
    token: localStorage.getItem('accessToken')
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_USER':
            return {
                user: JSON.parse(localStorage.getItem('user')),
                isLoged: true,
                token: localStorage.getItem('accessToken')
            }
        case 'REGISTER_USER':
            return {
                isLoged: false,
            }
        case 'LOGOUT_USER':
            return {
                user: null,
                isLoged: false,
                token: null
            }
        default:
            return state;
    }
}

export default authReducer;