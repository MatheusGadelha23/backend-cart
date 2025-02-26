import { RequestHandler } from "express";

export const notFoundRequest: RequestHandler = (req, res) => {
  res.status(404).json({
    error: 'Rota não encontrada'
  });
}