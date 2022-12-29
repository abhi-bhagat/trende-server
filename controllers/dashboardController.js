const knex = require("knex")(require("../knexfile"));

exports.getProducts = (_req, res) => {
	knex("products")
		.where("owner_id", "deae6604-abe4-4969-87dd-3e0d66480713")
		.then((data) => res.status(200).json(data))
		.catch((e) => {
			res.status(400).send(`Error fetching products ${e}`);
		});


};

exports.lowProducts =(req,res)=>{
    knex("products")
    .where("product_qty", "<", 100)
    .then((data) => res.status(200).json(data))
    .catch((e) => {
        res.status(400).send(`Error fetching products ${e}`);
    });
}
