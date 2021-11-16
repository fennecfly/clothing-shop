import { Item } from "../../shopData/shopDataInterfaces";
import { CartItem } from "./cartInterfaces";

export const addItemToCart = (
  cartItems: CartItem[],
  cartItemToAdd: Item | CartItem
): CartItem[] => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      existingCartItem.id === cartItem.id
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
  return cartItems.filter((cartItem) => cartItem.id !== cartItemIdToRemove);
};
