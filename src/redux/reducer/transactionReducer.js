const initialState = {
    transactions: [],
    transactionDetail: {},
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
        case 'GET_TRANSACTION_DETAIL':
            return {
                ...state,
                transactionDetail: action.payload
            }
        case 'UPDATE_TRANSACTION':
            return {
                ...state,
                transactions: state.transactions.map(transaction => {
                    if (transaction.id === action.payload.id) {
                        return action.payload
                    } else {
                        return transaction
                    }
                })
            }
        default:
            return state
    }
}

export default transactionReducer;