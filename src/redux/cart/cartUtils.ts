import { Item } from "../../shopData/shopDataInterfaces";
import { CartItem } from "./cartInterfaces";

const findCartItem = (
  cartItems: CartItem[],
  cartItemToFind: Item | CartItem
) => {
  return cartItems.find((cartItem) => cartItem.id === cartItemToFind.id);
};

export const addItemToCart = (
  cartItems: CartItem[],
  cartItemToAdd: Item | CartItem
): CartItem[] => {
  const existingCartItem = findCartItem(cartItems, cartItemToAdd);

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      existingCartItem.id === cartItem.id
        ? { ...cartItem, count: cartItem.count + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...cartItemToAdd, count: 1 }];
};
