const router = require("express").Router();
const producsController = require("../controllers/products.controller");
const jwtMiddleware = require("../middlewares/validateToken.middleware");

router.post("/products", jwtMiddleware, producsController.saveProduct);
router.patch(
  "/products/:id",
  jwtMiddleware,
  producsController.updateProductById
);
router.delete(
  "/products/:id",
  jwtMiddleware,
  producsController.deleteProductById
);
router.get("/products/:id", producsController.getProductById);
router.get("/products", producsController.getProductsByCategory);
router.get("/search-products", producsController.getProductsBySearch);

module.exports = router;
