import { Product } from "../models/product.model";

let cart: Product[] = [];

export const getCartService = () => {
  return cart;
};

export const addToCartService = (products: Product[]) => {
  products.forEach(product => {
    cart.push(product);
  });
  return cart;
};

export const removeFromCartService = (products: Product[]) => {
  products.forEach(product => {
    const productExists = cart.some((c) => c.name === product.name);

    if (!productExists) {
      throw new Error(`Produto '${product.name}' não encontrado no carrinho.`);
    }

    cart = cart.filter((c) => c.name !== product.name);
  });
  return cart;
};
