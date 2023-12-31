const express = require("express");
const router = express.Router();
const productsController = require("../../controllers/productsController.js");

const {
  getAllProducts,
  createNewProduct,
  updateProduct,
  deleteProduct,
  getProductById,
} = productsController;
router
  .route("/")
  .get(getAllProducts)
  .post(createNewProduct)
  .put(updateProduct)
  .delete(deleteProduct);

router.route("/:productId").get(getProductById);

module.exports = router;
