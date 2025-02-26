import { RequestHandler } from "express";
import { getCartService, addToCartService, removeFromCartService } from "../services/cart.service";
import { Product } from "../models/product.model";
import { getProductByNameService } from "../services/product.service";

export const getCartController: RequestHandler = async (req, res) => {
  try {
    const cart = getCartService();
    res.json({ cart });
    return;
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar o carrinho." });
    return;
  }
};

export const addToCartController: RequestHandler = async (req, res) => {
  try {
    const {products} = req.body;
    
    if (!products || products.length === 0) {
      res.status(400).json({ message: "Nenhum produto informado para adicionar ao carrinho." });
      return;
    }
    
    addToCartService(products);

    if (products.length === 1) {
      res.status(200).json({ message: "Produto adicionado ao carrinho!.", cart:getCartService() });
    } else {
      res.status(200).json({ message: "Produtos adicionados ao carrinho!.", cart:getCartService() });
    }
  } catch (error) {
    res.status(500).json({ message: "Erro ao adicionar produto ao carrinho." });
    return;
  }
};

export const removeFromCartController: RequestHandler = async (req, res) => {
  try {
    const { names } = req.body;

    if (!names || names.length === 0) {
      res.status(400).json({ message: "Deve ser informado pelo menos um produto para remoção!" });
      return;
    }

    const productsToRemove: Product[] = names.map((name: string) => getProductByNameService(name)).filter((product: Product | undefined) => product !== undefined);
  
    try {
      removeFromCartService(productsToRemove);
    } catch (error) {
      res.status(404).json({ message: "Nenhum produto encontrado para remoção." });
      return;
    }

    res.status(200).json({ message: "Produtos removidos do carrinho com sucesso!", cart: getCartService() });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Erro ao remover os produtos do carrinho!" });
    return;
  }
};
