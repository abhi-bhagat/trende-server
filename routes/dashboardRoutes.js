const router = require("express").Router();

const {
	getProducts,
	lowProducts,
	monthlySales,
	addProduct,
	deleteProduct,
	transactions,
} = require("../controllers/dashboardController");

router.route("/").get(getProducts);
router.route("/lowProducts").get(lowProducts);
router.route("/monthlySales").get(monthlySales);
router.route("/addProduct").post(addProduct);
router.route("/deleteProduct").delete(deleteProduct);
router.route("/getTransactions").get(transactions);

module.exports = router;
