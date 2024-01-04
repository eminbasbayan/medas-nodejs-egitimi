const express = require("express");
const router = express.Router();

router
  .route("/")
  .get((req, res) => {
    res.json(data.products);
  })
  .post((req, res) => {
    res.json({
      productName: req.body.productName,
      categoryName: req.body.categoryName,
    });
  })
  .put((req, res) => {
    res.json({
      productName: req.body.productName,
      categoryName: req.body.categoryName,
    });
  })
  .delete((req, res) => {
    res.json({
      id: req.body.id,
    });
  });

router.route("/:productId").get((req, res) => {
 
});

module.exports = router;
