import fs from "fs";
import { Product } from "../models/product.model";

const readProductsFile = (): Product[] => {
  try {
    const data = fs.readFileSync("products.json", "utf-8");
    return JSON.parse(data);
  } catch (error) {
    console.error("Erro ao ler o arquivo products.json:", error);
    throw new Error("Não foi possível carregar os produtos.");
  }
};

const products: Product[] = readProductsFile();

export const getAllProductsService = (): Product[] => {
  try {
    return products;
  } catch (error) {
    console.error("Erro ao buscar todos os produtos:", error);
    throw new Error("Erro ao buscar todos os produtos.");
  }
};

export const getProductByNameService = (name: string): Product | undefined => {
  try {
    return products.find((product) => product.name === name);
  } catch (error) {
    console.error("Erro ao buscar produto pelo nome:", error);
    throw new Error("Erro ao buscar o produto.");
  }
};
