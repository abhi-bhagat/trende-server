const knex = require("knex")(require("../knexfile"));
const { v4: uuidv4 } = require("uuid");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

exports.updateOrder = (req, res) => {
	// console.log(req.body[1].length);
	if (
		!req.body[0].customer_address ||
		!req.body[0].customer_email ||
		!req.body[0].customer_name ||
		!req.body[0].customer_phone ||
		!req.body[0].customer_postal ||
		!req.body[0].customer_total ||
		!req.body[1].length
	) {
		res.status(400).send(`Please make sure to fill out all the fields`);
	}
	const orderID = uuidv4();
	const customerID = uuidv4();
	const time = new Date();
	// let orderAmount = 0;
	// let new_qty = 10;
	// let abc = 1;
	//
	//
	// Stripe di koshish

	//TODO get price and customer email
	//
	// const token = req.body;
	// const idemponencyKey = uuidv4();
	// return stripe.customers
	// 	.create({
	// 		email: req.body[0].customer_email,
	// 		source: token.id,
	// 	})
	// 	.then((customer) => {
	// 		stripe.charges.create(
	// 			{
	// 				amount: total * 100,
	// 				currency: "cad",
	// 				customer: req.body[0].customer_email,
	// 				description: "product description",
	// 				shipping: {
	// 					name: token.card.name,
	// 					address: {
	// 						country: token.card.address_country,
	// 					},
	// 				},
	// 			},
	// 			{ idemponencyKey }
	// 		);
	// 	});

	//
	//
	//
	//
	//
	const productsData = req.body[1];

	const productIds = req.body[1].map((product) => product.id);
	const qty = req.body[1].map((product) => product.quantity);
	console.log("qty", qty);
	console.log("total ", req.body[0].customer_total);

	const knexPromises = req.body[1].map((product) =>
		knex("products")
			.where("product_id", product.id)
			.decrement("product_qty", product.quantity)
	);
	Promise.all(knexPromises)
		.then(() => {
			return knex("products")
				.whereIn("product_id", productIds)
				.select("product_id", "product_price");
		})
		.then((data) => {
			let total = 0;
			productsData.forEach((product) => {
				const dataProduct = data.find((item) => item.product_id === product.id);
				total = total + dataProduct.product_price * product.quantity;
			});

			return knex("orders").insert({
				order_id: uuidv4(),
				customer_id: "0b17c1c6-3196-4c04-b816-6414d4929cde",
				order_amount: total,
				customer_shipping_address: req.body[0].customer_address,
				order_status: "pending",
			});
		})
		.then(() => res.status(200).send(`Inserted`))
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
};
