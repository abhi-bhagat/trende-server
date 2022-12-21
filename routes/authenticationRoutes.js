const router = require("express").Router();
const passport = require("passport");

const { authentication } = require("../controllers/authenticationController");

router.route("/google", passport.authenticate("google")).get(authentication);
module.exports = router;
