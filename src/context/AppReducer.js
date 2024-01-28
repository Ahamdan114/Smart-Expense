export default function AppReducer(state, action) {
    switch (action.type) {
        case "Delete_Transaction":
            return {
                ...state,
                transactions: state.transactions.filter(
                    (transaction) => transaction.id !== action.payload
                ),
            };

        case "Add_Transaction":
            return {
                ...state,
                transactions: [action.payload, ...state.transactions],
            };
        case "Change_Currency":
            return {
                ...state,
                currency: action.payload,
            };
        default:
            return state;
    }
}
