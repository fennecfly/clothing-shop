import { Item } from "../../shopData/shopDataInterfaces";
import { CartItem } from "./cartInterfaces";

const findCartItem = (cartItems: CartItem[], cartItemIdToFind: number) => {
  return cartItems.findIndex((cartItem) => cartItem.id === cartItemIdToFind);
};

export const addItemToCart = (
  cartItems: CartItem[],
  cartItemToAdd: Item | CartItem
): CartItem[] => {
  const posOfCartItem = findCartItem(cartItems, cartItemToAdd.id);

  if (posOfCartItem >= 0) {
    return cartItems.map((cartItem) =>
      posOfCartItem === cartItem.id
        ? { ...cartItem, count: cartItem.count + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...cartItemToAdd, count: 1 }];
};

export const removeItemFromCart = (
  cartItems: CartItem[],
  cartItemIdToRemove: number
): CartItem[] => {
  const posOfCartItem = findCartItem(cartItems, cartItemIdToRemove);
  const newCartItems = [...cartItems];

  if (posOfCartItem >= 0) {
    newCartItems.splice(posOfCartItem, 1);
  }

  return newCartItems;
};
