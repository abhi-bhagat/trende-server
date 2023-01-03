const router = require("express").Router();

const {
	getProducts,
	lowProducts,
	monthlySales,
	addProduct,
} = require("../controllers/dashboardController");

router.route("/").get(getProducts);
router.route("/lowProducts").get(lowProducts);
router.route("/monthlySales").get(monthlySales);
router.route("/addProduct").post(addProduct);

module.exports = router;
