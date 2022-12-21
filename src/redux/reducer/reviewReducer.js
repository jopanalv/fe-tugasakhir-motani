const initialState = {
    reviews: [],
    loading: false,
    error: null
}

const reviewReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_ALL_REVIEWS':
            return {
                ...state,
                reviews: action.payload
            }
        case 'CREATE_REVIEW':
            return {
                ...state,
                reviews: [...state.reviews, action.payload]
            }
        default:
            return state
    }
}

export default reviewReducer;