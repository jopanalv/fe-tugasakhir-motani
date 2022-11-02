const initialState = {
    categories: [],
    loading: false,
    error: null
}

const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_ALL_CATEGORY':
            return {
                ...state,
                categories: action.payload
            }
        default:
            return state
    }
}

module.exports = categoryReducer;