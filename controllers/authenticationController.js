const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const { SESSION_SECRET,CLIENT_URL, GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } = process.env;
const session = require("express-session");

const knex = require("knex")(require("../knexfile"));
const { auth, requiresAuth } = require("express-openid-connect");

exports.authentication = (req,res) => {
	console.log("me authen");


	res.send(
		req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out'
	  )




};

//callback
exports.callback = (_req, res) => {
	// res.redirect("http://localhost:3000/shop");
};
