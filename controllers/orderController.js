const knex = require("knex")(require("../knexfile"));
const { v4: uuidv4 } = require("uuid");

exports.updateOrder = (req, res) => {
	// console.log(req.body[1].length);
	if (
		!req.body[0].customer_address ||
		!req.body[0].customer_email ||
		!req.body[0].customer_name ||
		!req.body[0].customer_phone ||
		!req.body[0].customer_postal ||
		!req.body[1].length
	) {
		res.status(400).send(`Please make sure to fill out all the fields`);
	}
	const orderID = uuidv4();
	const customerID = uuidv4();
	const time = new Date();
	let orderAmount = 199.95;
	let new_qty = 10;
	let abc = 1;
	req.body[1].map((product) => {
		knex("products")
			.where("product_id", product.id)
			.then((data) => {
				orderAmount =
					orderAmount +
					parseFloat(data[0].product_price) * parseFloat(product.quantity);

				new_qty = parseInt(data[0].product_qty) - parseInt(product.quantity);
				console.log(`New order amount`, orderAmount);
				abc = data[0];

				knex("products")
					.where("product_id", product.id)
					.update({ product_qty: new_qty })
					.catch((e) => res.send(`Error updating data`));
			});
	});
	// foreign keys ghapla!!
	knex("orders")
		.insert({
			order_id: orderID,
			customer_id: "026bbc88-7e48-4735-be31-97052cbe3687",
			order_amount: orderAmount,
			// customer_shipping_address: req.body[0].customer_address,
			customer_shipping_address:
				"6444 Prince Albasdfeert StorageEvent, Vancouver Canada",
			// customer_email: req.body[0].customer_email,
			customer_email: "Lang.Emery@Betty.io",
			order_Status: "pending",
		})
		.then((data) => {
			res.status(200).send(`Order table updated successfully`);
		})
		.catch((e) => res.send(`error updating orders table ${e}`));
};