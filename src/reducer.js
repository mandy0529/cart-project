import {CAL, CLEAR, DATA, DEL, LOADING, MINUS, PLUS, SHOW} from './controlType';

export const initialState = {
  loading: true,
  amount: 0,
  total: 0,
  event: false,
  cart: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case LOADING:
      return {...state, loading: true};

    case DATA:
      return {...state, cart: action.payload, loading: false};

    case CLEAR:
      return {...state, cart: []};

    case DEL:
      const newItem = state.cart.filter((item) => item.id !== action.payload);
      return {...state, cart: newItem};

    case PLUS:
      const plus = state.cart.map((item) => {
        return item.id === action.payload
          ? {...item, amount: item.amount + 1}
          : item;
      });
      return {...state, cart: plus};

    case MINUS:
      const minus = state.cart
        .map((item) => {
          return item.id === action.payload
            ? {...item, amount: item.amount - 1}
            : item;
        })
        .filter((item) => item.amount !== 0);
      return {...state, cart: minus};

    case CAL:
      let {total, amount} = state.cart.reduce(
        (acc, cur) => {
          const {price, amount} = cur;
          acc.amount += amount;
          acc.total += price * amount;
          return acc;
        },
        {
          amount: 0,
          total: 0,
        }
      );
      total = parseFloat(total.toFixed(2));
      return {...state, total, amount};

    default:
      throw new Error('not matched any types');
  }
};

export default reducer;
