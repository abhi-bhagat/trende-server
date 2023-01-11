const knex = require("knex")(require("../knexfile"));
const { v4: uuidv4 } = require("uuid");
const { authenticateToken } = require("../index");
//all products
exports.getProducts = (_req, res) => {
	knex("products")
		.where("owner_id", "deae6604-abe4-4969-87dd-3e0d66480713")
		.then((data) => res.status(200).json(data))
		.catch((e) => {
			res.status(400).send(`Error fetching products ${e}`);
		});
};
//low products
exports.lowProducts = (req, res) => {
	knex("products")
		.where("product_qty", "<", 100)
		.then((data) => res.status(200).json(data))
		.catch((e) => {
			res.status(400).send(`Error fetching products ${e}`);
		});
};

//monthly sales
exports.monthlySales = (req, res) => {
	knex("orders")
		.select()
		.then((data) => {
			const order_data = data;
			const sales_data = [
				{ Month: "Jan", Sales: 0 },
				{ Month: "Feb", Sales: 0 },
				{ Month: "Mar", Sales: 0 },
				{ Month: "Apr", Sales: 0 },
				{ Month: "May", Sales: 0 },
				{ Month: "Jun", Sales: 0 },
				{ Month: "Jul", Sales: 0 },
				{ Month: "Aug", Sales: 0 },
				{ Month: "Sep", Sales: 0 },
				{ Month: "Oct", Sales: 0 },
				{ Month: "Nov", Sales: 0 },
				{ Month: "Dec", Sales: 0 },
			];

			order_data.forEach((data) => {
				const i = data.order_time.toString().split(" ");

				const found = sales_data.some((element) => element.Month === i[1]);

				if (found) {
					const foundElement = sales_data.find((e) => e.Month === i[1]);

					const mySales = foundElement.Sales + data.order_amount;
					const myshortSales = mySales.toFixed(2);

					foundElement.Sales = Number(myshortSales);
				}
			});

			res.status(200).json(sales_data);
		})
		.catch((e) => res.status(400).send(`Error fetching orders`));
};

//transactions

exports.transactions = (req, res) => {
	knex("orders")
		.select()
		.then((data) => res.status(200).json(data));
};

//add products

exports.addProduct = (req, res) => {
	if (
		!req.body.name ||
		!req.body.category ||
		!req.body.image ||
		!req.body.qty ||
		!req.body.price ||
		!req.body.color ||
		!req.body.desc ||
		!req.body.company
	) {
		res.status(400).send(`Error uploading product`);
	}

	const prodID = uuidv4();
	const owner_id = "deae6604-abe4-4969-87dd-3e0d66480713";

	knex("products")
		.insert({
			product_id: prodID,
			product_name: req.body.name,
			product_description: req.body.desc,
			product_category: req.body.category,
			product_color: req.body.color,
			product_qty: req.body.qty,
			product_price: req.body.price,
			product_stars: 4,
			product_reviews: {},
			product_company: req.body.company,
			product_image: req.body.image,
			owner_id: owner_id,
		})
		.then(() => {
			res.status(200).send(`Inserted successfully`);
		})
		.catch((e) => res.status(500).send(`Error adding product`));
};
//delete prod
exports.deleteProduct = (req, res) => {
	console.log(`req`, req.body.prodId);
	knex("products")
		.where("product_id", req.body.prodId)
		.del()
		.then(() =>
			res
				.status(200)
				.send(
					`product with id of -> ${req.body.prodId} <- was successfully deleted`
				)
		)
		.catch((e) => {
			res.send(`Error deleting product ${e}  -> id was ${req.body.prodId}`);
		});
};
