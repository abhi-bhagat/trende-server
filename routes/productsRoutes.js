const router = require("express").Router();

const {
	getAllProducts,
	getSingleProduct,
	getProductByCategory,
} = require("../controllers/productController");

router.route("/").get(getAllProducts);

router.route("/:product_id").get(getSingleProduct);

router.route("/category/:product_category").get(getProductByCategory);


module.exports = router;
