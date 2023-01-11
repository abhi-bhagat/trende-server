const knex = require("knex")(require("../knexfile"));
const { v4: uuidv4 } = require("uuid");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
exports.loginHandler = async (req, res) => {
	if (!req.body.email || !req.body.pass) {
		res.status(400).send(`Please make sure to fill out all the fields`);
	}
	let custData;

	await knex("customers")
		.where("customer_email", req.body.email)
		.then((data) => {
			custData = data;
		})
		.catch(() => {
			res.status(401).send(`User Not Found`);
		});

	try {
		if (await bcrypt.compare(req.body.pass, custData[0].customer_password)) {
			const user_email = req.body.email;
			const user_name = ` ${custData[0].customer_name} ${custData[0].customer_lname}`;
			const accessToken = jwt.sign(user_name, process.env.SESSION_SECRET);
			res.status(200).json({ accessToken: accessToken });
		} else {
			res.status(401).send(`incorrect credentials`);
		}
	} catch {
		res.status(500).send(`Error logging in`);
	}
};

exports.signupHandler = async (req, res) => {
	try {
		if (
			!req.body.fname ||
			!req.body.lname ||
			!req.body.address ||
			!req.body.password ||
			!req.body.email ||
			!req.body.phone
		) {
			res.status(400).send(`Please make sure to fill out all the fields`);
		}
		const salt = await bcrypt.genSalt();
		const hashedPassword = await bcrypt.hash(req.body.password, salt);

		const customer_billing_address = req.body.address;

		knex("customers")
			.insert({
				customer_id: uuidv4(),
				customer_email: req.body.email,
				customer_password: hashedPassword,
				customer_fname: req.body.fname,
				customer_lname: req.body.lname,
				customer_billing_address: customer_billing_address,
				customer_shipping_address: req.body.address,
				customer_phone: req.body.phone,
			})
			.then(() => {
				res.status(200).send(`you are added in DB`);
			})
			.catch((e) => res.status(500).send("error inserting in DB"));
	} catch {
		res.status(500).send(`Error registering user`);
	}
};
