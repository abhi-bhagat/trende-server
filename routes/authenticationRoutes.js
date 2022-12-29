const router = require("express").Router();
const passport = require("passport");

const {
	authentication,
	callback,
} = require("../controllers/authenticationController");

router
	.route("/google", passport.authenticate("google", { scope: ["profile"] }))
	.get(authentication);

//callback
router
	.route(
		"/google/callback",
		passport.authenticate("google", {
			failureRedirect: "/signup/",
			successRedirect: "http://localhost/3000/checkout/",
		})
	)
	.get(callback);
module.exports = router;
