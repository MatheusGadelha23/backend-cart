import { Router } from "express";
import cartRoutes from "./cart.routes";
import productRoutes from "./product.routes";

const router = Router();

router.use("/cart", cartRoutes);
router.use("/products", productRoutes);

export default router;
