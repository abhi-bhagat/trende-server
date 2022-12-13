const express = require("express");
const expressSession = require("express-session");
const cors = require("cors");
const helmet = require("helmet");
const passport = require("passport");

const app = express();

const PORT = process.env.PORT || 8080;

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

app.use("/shop", productsRoutes);
app.use("/order", orderRoutes);

app.listen(PORT, () => {
	console.log(`🚀 Server running at http://localhost:${PORT}`);
});
