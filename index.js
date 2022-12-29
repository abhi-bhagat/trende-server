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
const {
	CLIENT_URL,
	STRIPE_SECRET_KEY,
	GOOGLE_CLIENT_ID,
	GOOGLE_CLIENT_SECRET,
} = process.env;

const config = {
	authRequired: false,
	auth0Logout: true,
	baseURL: "http://localhost:8080",
	clientID: "qrEBJWChon1Ya66zaEZdpIlv7cX4qY64",
	issuerBaseURL: "https://dev-57nak77h2lxvpqol.us.auth0.com",
	secret: SESSION_SECRET,
};

require("dotenv").config();

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
app.use(auth(config));

//passport middleware
app.use(passport.initialize());
app.use(passport.session());

//routes
const productsRoutes = require("./routes/productsRoutes.js");
const orderRoutes = require("./routes/orderRoutes");
const authentication = require("./routes/authenticationRoutes");
const dashboardroutes = require("./routes/dashboardRoutes");

app.use("/shop", productsRoutes);
app.use("/order", orderRoutes);
app.use("/auth", authentication);
app.use("/dashboard", dashboardroutes);

app.listen(PORT, () => {
	console.log(`🚀 Server running at http://localhost:${PORT}`);
});
