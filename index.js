const express = require("express");
const expressSession = require("express-session");
const cors = require("cors");
const helmet = require("helmet");
require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const { SESSION_SECRET } = process.env;

const app = express();
const passport = require("passport");
const { auth, requiresAuth } = require("express-openid-connect");

const PORT = process.env.PORT || 8080;

app.use(express.json());

app.use(helmet());

app.use(
	cors({
		origin: true,
		credentials: true,
	})
);

// Include express-session middleware (with additional config options required for Passport session)
app.use(
	expressSession({
		secret: process.env.SESSION_SECRET,
		resave: false,
		saveUninitialized: true,
	})
);
// app.use(auth(config));

//passport middleware
app.use(passport.initialize());
app.use(passport.session());

//authenticate
exports.authenticateToken = (req, res, next) => {
	const authHeader = req.headers["authorization"];
	const token = authHeader && authHeader.split(" ")[1];
	if (token === null) {
		res.status(401);
	}

	jwt.verify(token, process.env.SESSION_SECRET, (err, user_name) => {
		if (err) {
			res.status(403);
		}
		req.user = user_name;
		next();
	});
};

//routes
const productsRoutes = require("./routes/productsRoutes.js");
const orderRoutes = require("./routes/orderRoutes");
const authentication = require("./routes/authenticationRoutes");
const dashboardroutes = require("./routes/dashboardRoutes");
const loginRoutes = require("./routes/loginRoute");
// const { JsonWebTokenError } = require("jsonwebtoken");

app.use("/shop", productsRoutes);
app.use("/order", orderRoutes);
app.use("/auth", authentication);
app.use("/dashboard", dashboardroutes);
app.use("/login", loginRoutes);

app.listen(PORT, () => {
	console.log(`🚀 Server running at http://localhost:${PORT}`);
});
