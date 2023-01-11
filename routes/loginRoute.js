const router = require("express").Router();
const {
	loginHandler,
	signupHandler,
} = require("../controllers/loginController");

router.route("/").post(loginHandler);
router.route("/newuser").post(signupHandler);
module.exports = router;
