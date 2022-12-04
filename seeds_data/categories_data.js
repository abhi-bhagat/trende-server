const { v4: uuidv4 } = require("uuid");

module.exports = [
	{
		category_id: uuidv4(),
		category_name: "mens",
	},
	{
		category_id: uuidv4(),
		category_name: "womens",
	},
	{
		category_id: uuidv4(),
		category_name: "kids",
	},
];
