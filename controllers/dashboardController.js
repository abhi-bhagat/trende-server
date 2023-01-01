const knex = require("knex")(require("../knexfile"));
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
			console.log(data);

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
					console.log("found", typeof foundElement.Sales);
					console.log(`order amount`, typeof data.order_amount);
					const mySales = foundElement.Sales + data.order_amount;
					const myshortSales = mySales.toFixed(2);
					console.log(`i am sales`, myshortSales);
					foundElement.Sales = Number(myshortSales);

				}
			});
			console.log(sales_data);
			res.status(200).json(sales_data);
		})
		.catch((e) => res.status(400).send(`Error fetching orders`));
};
