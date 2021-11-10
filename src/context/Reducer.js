export const cardReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CARD":
      return {
        ...state,
        cart: [...state.cart, {...action.payload, qty: 1}]
      };
    case "REMOVE_FROM_CARD":
      return {
        ...state,
        cart: state.card.filter((c) => c.id !== action.payload.id),
      };

    default:
      return state;
  }
}
