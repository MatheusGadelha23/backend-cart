import { RequestHandler } from "express";
import { getAllProductsService } from "../services/product.service";

export const getProductsController: RequestHandler = async (req, res) => {
  try {
    const products = getAllProductsService();
    res.json({ products });
    return;
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar produtos." });
    return;
  }
};

