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
        case 'CREATE_CATEGORY':
            return {
                ...state,
                categories: [...state.categories, {name: action.payload}]
            }
        case 'UPDATE_CATEGORY':
            const index = state.categories.findIndex((category) => category.id === action.payload.id)
            const category = [...state.categories]
            category[index].name = action.payload.name
            return {
                ...state,   
                categories: category
            }
        case 'DELETE_CATEGORY':
            return {
                ...state,
                categories: state.categories.filter(category => category.id !== action.payload)
            }
        default:
            return state
    }
}

export default categoryReducer;