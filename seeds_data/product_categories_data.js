const { v4: uuidv4 } = require("uuid");

// NOTE : product category matlab  ki hai oh pants ch aanda aak tees ch aanda aa , sweater ch aanda aa
// nd all
// todo category can be anything basically we have to link all the things here like men, women, clotihng, all types like dress ,sweater etc.
module.exports = [
	{
		product_category_id: uuidv4(),
		product_id: "524de1db-53fc-42f9-acb5-dff8e4df2365",
		category_id: "5595cff4-40b6-4b35-a037-9e21cd6fa44d", // men
	},
	{
		product_category_id: uuidv4(),
		product_id: "4dcd2395-d731-442c-9ed2-5591a7ca6be2",
		category_id: "5595cff4-40b6-4b35-a037-9e21cd6fa44d", //men
	},
	{
		product_category_id: uuidv4(),
		product_id: "03655a07-29ac-4729-84fe-01b26b16d857",
		category_id: "d77657ca-7d6b-458a-ae53-a1925d05cf67", //women
	},
	{
		product_category_id: uuidv4(),
		product_id: "e00275c8-5e52-40f0-9b45-21e3b6fd4412",
		category_id: "d77657ca-7d6b-458a-ae53-a1925d05cf67", //women
	},
	{
		product_category_id: uuidv4(),
		product_id: "8b19c0b9-121f-4f1d-816a-93e866fd3aed",
		category_id: "54a40dfb-0153-4fda-97f7-ff89dbc34d78", //kid
	},
	{
		product_category_id: uuidv4(),
		product_id: "e7f49a7a-f75e-4b0b-b0bc-3bcb1373be0b",
		category_id: "54a40dfb-0153-4fda-97f7-ff89dbc34d78", //kid
	},
	{
		product_category_id: uuidv4(),
		product_id: "1ba0003c-70ce-4540-ab14-a2108e4f60d8",
		category_id: "5595cff4-40b6-4b35-a037-9e21cd6fa44d", //men
	},
	{
		product_category_id: uuidv4(),
		product_id: "5c8157f5-151a-4134-8cc2-b753e8d586ba",
		category_id: "d77657ca-7d6b-458a-ae53-a1925d05cf67", //women
	},
	{
		product_category_id: uuidv4(),
		product_id: "09fbcaa6-474f-47fa-9ec2-1649505fca4e",
		category_id: "54a40dfb-0153-4fda-97f7-ff89dbc34d78", //kids
	},
];
