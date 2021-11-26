import { CollectionItem } from "../shopReducer/shopInterfaces";
import { CartItem } from "./cartInterfaces";

const findCartItem = (
  cartItems: CartItem[],
  cartItemIdToFind: number
): CartItem | undefined => {
  return cartItems.find((cartItem) => cartItem.id === cartItemIdToFind);
};

export const addCartItemUtil = (
  cartItems: CartItem[],
  cartItemToAdd: CartItem | CollectionItem
): CartItem[] => {
  const existingCartItem = findCartItem(cartItems, cartItemToAdd.id);

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      existingCartItem.id === cartItem.id
        ? { ...cartItem, count: cartItem.count + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...cartItemToAdd, count: 1 }];
};

export const deleteCartItemUtil = (
  cartItems: CartItem[],
  cartItemIdToRemove: number
): CartItem[] => {
  return cartItems.filter((cartItem) => cartItem.id !== cartItemIdToRemove);
};

export const removeCartItemUtil = (
  cartItems: CartItem[],
  cartItemIdToRemove: number
): CartItem[] => {
  const existingCartItem = findCartItem(cartItems, cartItemIdToRemove);

  if (existingCartItem && existingCartItem.count > 1) {
    return cartItems.map((cartItem) =>
      existingCartItem.id === cartItem.id
        ? { ...cartItem, count: cartItem.count - 1 }
        : cartItem
    );
  }

  return cartItems;
};
