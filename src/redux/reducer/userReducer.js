const initialState = {
    profiles: []
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_ALL_USERS':
            return {
                ...state,
                profiles: action.payload
            }
        case 'REGISTER_USER':
            return {
                ...state,
                profiles: [...state.profiles, action.payload]
            }
        case 'DELETE_USER':
            return {
                ...state,
                profiles: state.profiles.filter(profile => profile.id !== action.payload)
            }
        default:
            return state;
    }
}

export default userReducer;