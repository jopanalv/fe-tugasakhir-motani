const initialState = {
    products: [],
    detail: {},
    loading: false,
    error: null
}

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_PRODUCT':
            return {
                ...state,
                products: [...state.products, action.payload]
            }
        case 'GET_PRODUCTS':
            return {
                ...state,
                products: action.payload
            }
        case 'GET_PRODUCT_BY_ID':
            return {
                ...state,
                detail: action.payload
            }
        case 'UPDATE_PRODUCT':
            return {
                ...state,
                products: state.products.map((product) => {
                    if (product.id === action.payload.id) {
                        return action.payload
                    } else {
                        return product
                    }
                })
            }
        default:
            return state
    }
}

export default productReducer;