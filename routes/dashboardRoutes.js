const router = require("express").Router();

const {
	getProducts,
	lowProducts,
	monthlySales,
} = require("../controllers/dashboardController");

router.route("/").get(getProducts);
router.route("/lowProducts").get(lowProducts);
router.route("/monthlySales").get(monthlySales);

module.exports = router;
