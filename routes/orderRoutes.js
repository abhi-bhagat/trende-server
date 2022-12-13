const router = require("express").Router();

const { updateOrder } = require("../controllers/orderController");


router.route('/').post(updateOrder);

module.exports = router;
