const express = require("express");
const expressSession = require("express-session");
const cors = require("cors");
const helmet = require("helmet");
require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const app = express();

const PORT = process.env.PORT || 8080;
const {
	CLIENT_URL,
	STRIPE_SECRET_KEY,
	GOOGLE_CLIENT_ID,
	GOOGLE_CLIENT_SECRET,
} = process.env;

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

//routes
const productsRoutes = require("./routes/productsRoutes.js");
const orderRoutes = require("./routes/orderRoutes");
const authentication = require("./routes/authenticationRoutes");

app.use("/shop", productsRoutes);
app.use("/order", orderRoutes);
app.use("/auth", authentication);

app.listen(PORT, () => {
	console.log(`🚀 Server running at http://localhost:${PORT}`);
});
