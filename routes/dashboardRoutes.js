const router = require("express").Router();

const {
	getProducts,
	lowProducts,
} = require("../controllers/dashboardController");

router.route("/").get(getProducts);
router.route("/lowProducts").get(lowProducts);

module.exports = router;
