import CartContext from './Cart-Context'
import { useReducer } from 'react';

const defaultCartState = {
    items: [],
    subtotal: 0,
}

const cartReducer = (state, action) => {
    if (action.type === "ADD") {
        // const updatedItems = state.items.concat(action.item); // adds an new item to array and upates array, and returns new array.
        const updatedSubTotal = parseFloat((state.subtotal + action.item.price * action.item.itemQuantity).toFixed(2));

        const existingCartItemIndex = state.items.findIndex(
            item => item.id === action.item.id
        );

        const existingCartItem = state.items[existingCartItemIndex];

        let updatedItems;

        if (existingCartItem) {
            const updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + (action.item.price * action.item.itemQuantity),
                itemQuantity: existingCartItem.itemQuantity + action.item.itemQuantity
            };
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;

        } else {
            let updatedItem = {
                ...action.item,
                amount: action.item.amount * action.item.itemQuantity
            }

            updatedItems = state.items.concat(updatedItem);
        }

        return {
            items: updatedItems,
            subtotal: updatedSubTotal
        }
    } else if (action.type === "REMOVE") {

        const findItem = state.items.findIndex(
            item => item.id === action.id
        );

        const updatedSubTotal = parseFloat((state.subtotal - state.items[findItem].price).toFixed(2));

        let updatedItems;


        if (state.items[findItem].itemQuantity === 1) {
            updatedItems = state.items.filter(item => item.id !== action.id);
        } else {
            let updatedItem = {
                ...state.items[findItem],
                itemQuantity: state.items[findItem].itemQuantity - 1,
                amount: parseFloat((state.items[findItem].amount - state.items[findItem].price).toFixed(2))
            }

            updatedItems = [...state.items];
            updatedItems[findItem] = updatedItem;
        }

        return {
            items: updatedItems,
            subtotal: updatedSubTotal
        }
    }
    return defaultCartState;
}
const CartProvider = props => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

    const addItemToCartHandler = item => {
        dispatchCartAction({ type: 'ADD', item: item });
    };

    const removeItemFromCartHandler = id => {
        dispatchCartAction({ type: 'REMOVE', id: id });
    };

    const cartContext = {
        items: cartState.items,
        subtotal: cartState.subtotal,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    }

    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
};

export default CartProvider;