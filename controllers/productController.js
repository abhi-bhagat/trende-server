const knex = require("knex")(require("../knexfile"));

exports.getAllProducts = (_req, res) => {
	knex("products")
		.then((data) => res.status(200).json(data))
		.catch((e) => {
			res.status(400).send(`Error fetching products ${e}`);
		});
};

exports.getSingleProduct = (req, res) => {
	knex("products")
		.where("product_id", req.params.product_id)
		.then((data) => {
			res.status(200).json(data);
		})
		.catch((e) => {
			res.status(400).send("Product not found");
		});
};
exports.getProductByCategory = (req, res) => {
	knex(`products`)
		.where(`product_category`, req.params.product_category)
		.then((data) => {
			res.status(200).json(data);
		})
		.catch((e) => res.status(400).send(`Products in that category not found`));
};
