const initialState = {
    banner: [],
    loading: false,
    error: null
}

const bannerReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_BANNER':
            return {
                ...state,
                banner: [...state.banner, action.payload]
            }
        case 'GET_ALL_BANNER':
            return {
                ...state,
                banner: action.payload
            }
        case 'DELETE_BANNER':
            return {
                ...state,
                products: state.banner.filter((ban) => ban.id !== action.payload)
            }
        default:
            return state
    }
}

export default bannerReducer;