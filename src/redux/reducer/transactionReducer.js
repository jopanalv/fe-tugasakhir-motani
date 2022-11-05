const initialState = {
    transactions: [],
    detail: {},
    loading: false,
    error: null
}

const transactionReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_ALL_TRANSACTION':
            return {
                ...state,
                transactions: action.payload
            }
        case 'CREATE_TRANSACTION':
            return {
                ...state,
                transactions: [...state.transactions, action.payload]
            }
        default:
            return state
    }
}

export default transactionReducer;