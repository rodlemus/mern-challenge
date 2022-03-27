const router = require("express").Router();
const categoriesController = require("../controllers/categories.controller");
const jwtMiddleware = require("../middlewares/validateToken.middleware");

router.post("/categories", jwtMiddleware, categoriesController.saveCategory);
router.patch(
  "/categories/:id",
  jwtMiddleware,
  categoriesController.updateCategoryById
);
router.delete(
  "/categories/:id",
  jwtMiddleware,
  categoriesController.deleteCategoryById
);
router.get("/categories/:id", categoriesController.getCategoryById);
router.get("/categories", categoriesController.getCategories);

module.exports = router;
