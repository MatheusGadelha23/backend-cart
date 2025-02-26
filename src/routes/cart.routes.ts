import { Router } from "express";
import { getCartController, addToCartController, removeFromCartController } from "../controllers/cart.controller";

const router = Router();

router.get("/", getCartController);
router.post("/", addToCartController);
router.delete("/", removeFromCartController);

export default router;
