const { v4: uuidv4 } = require("uuid");
const casual = require("casual");

//todo ->  and add images to database.

//todo ADD images on imgur and then link them here for now.!! for the seed data!
//todo then figure howto link it to the database
module.exports = [
	{
		owner_id: "deae6604-abe4-4969-87dd-3e0d66480713",
		owner_id: "deae6604-abe4-4969-87dd-3e0d66480713",

		product_id: "524de1db-53fc-42f9-acb5-dff8e4df2365",
		product_name: "T-Shirt",
		product_description:
			"t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lo",
		product_category: "Mens",
		product_color: "black",
		product_qty: 123,
		product_image: "https://imgur.com/eey0wnK.png",
		product_company: "Zara",
		product_price: 19.99,
		product_stars: 3,
		product_reviews: JSON.stringify([
			{ comment: "abc", commentId: uuidv4() },
			{ comment: "def", commentId: uuidv4() },
		]),
	},
	{
		owner_id: "deae6604-abe4-4969-87dd-3e0d66480713",

		product_id: "4dcd2395-d731-442c-9ed2-5591a7ca6be2",
		product_name: "T-Shirt",
		product_description:
			"t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lo",
		product_category: "Mens",
		product_color: "black",
		product_qty: 142,
		product_image: "https://imgur.com/vwiobA8.png",
		product_company: "Zara",
		product_price: 49.99,
		product_stars: 3,
		product_reviews: JSON.stringify([
			{ comment: "abc", commentId: uuidv4() },
			{ comment: "def", commentId: uuidv4() },
		]),
	},
	{
		owner_id: "deae6604-abe4-4969-87dd-3e0d66480713",

		product_id: "03655a07-29ac-4729-84fe-01b26b16d857",
		product_name: "Dress",
		product_description:
			"t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lo",
		product_category: "Women",
		product_color: "black",
		product_qty: 109,
		product_image: "https://imgur.com/OOqBdPq.png",
		product_company: "Under Armour",
		product_price: 19.99,
		product_stars: 3,
		product_reviews: JSON.stringify([
			{ comment: "abc", commentId: uuidv4() },
			{ comment: "def", commentId: uuidv4() },
		]),
	},
	{
		owner_id: "deae6604-abe4-4969-87dd-3e0d66480713",

		product_id: "e00275c8-5e52-40f0-9b45-21e3b6fd4412",
		product_name: "T-Shirt",
		product_description:
			"t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lo",
		product_category: "Women",
		product_color: "black",
		product_qty: 112,
		product_image: "https://imgur.com/ct1oGrJ.png",
		product_company: "Zara",
		product_price: 39.99,
		product_stars: 3,
		product_reviews: JSON.stringify([
			{ comment: "abc", commentId: uuidv4() },
			{ comment: "def", commentId: uuidv4() },
		]),
	},
	{
		owner_id: "deae6604-abe4-4969-87dd-3e0d66480713",

		product_id: "8b19c0b9-121f-4f1d-816a-93e866fd3aed",
		product_name: "T-Shirt",
		product_description:
			"t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lo",
		product_category: "Kids",
		product_color: "red",
		product_qty: 145,
		product_image: "https://imgur.com/P4lbxBw.png",
		product_company: "Adidas",
		product_price: 78.99,
		product_stars: 3,
		product_reviews: JSON.stringify([
			{ comment: "abc", commentId: uuidv4() },
			{ comment: "def", commentId: uuidv4() },
		]),
	},
	{
		owner_id: "deae6604-abe4-4969-87dd-3e0d66480713",

		product_id: "e7f49a7a-f75e-4b0b-b0bc-3bcb1373be0b",
		product_name: "T-Shirt",
		product_description:
			"t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lo",
		product_category: "Kids",
		product_color: "purple",
		product_qty: 90,
		product_image: "https://imgur.com/P4lbxBw.png",
		product_company: "Zara",
		product_price: 50.99,
		product_stars: 3,
		product_reviews: JSON.stringify([
			{ comment: "abc", commentId: uuidv4() },
			{ comment: "def", commentId: uuidv4() },
		]),
	},
	{
		owner_id: "deae6604-abe4-4969-87dd-3e0d66480713",

		product_id: "1ba0003c-70ce-4540-ab14-a2108e4f60d8",
		product_name: "T-Shirt",
		product_description:
			"t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lo",
		product_category: "Mens",
		product_color: "blue",
		product_qty: 45,
		product_image: "https://imgur.com/vwiobA8.png",
		product_company: "Puma",
		product_price: 12.99,
		product_stars: 3,
		product_reviews: JSON.stringify([
			{ comment: "abc", commentId: uuidv4() },
			{ comment: "def", commentId: uuidv4() },
		]),
	},
	{
		owner_id: "deae6604-abe4-4969-87dd-3e0d66480713",

		product_id: "5c8157f5-151a-4134-8cc2-b753e8d586ba",
		product_name: "T-Shirt",
		product_description:
			"t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lo",
		product_category: "Women",
		product_color: "black",
		product_qty: 142,
		product_image: "https://imgur.com/ct1oGrJ.png",
		product_company: "Zara",
		product_price: 89.99,
		product_stars: 3,
		product_reviews: JSON.stringify([
			{ comment: "abc", commentId: uuidv4() },
			{ comment: "def", commentId: uuidv4() },
		]),
	},
	{
		owner_id: "deae6604-abe4-4969-87dd-3e0d66480713",

		product_id: "09fbcaa6-474f-47fa-9ec2-1649505fca4e",
		product_name: "T-Shirt",
		product_description:
			"t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lo",
		product_category: "Kids",
		product_color: "red",
		product_qty: 109,
		product_image: "https://imgur.com/P4lbxBw.png",
		product_company: "Zara",
		product_price: 23.99,
		product_stars: 3,
		product_reviews: JSON.stringify([
			{ comment: "abc", commentId: uuidv4() },
			{ comment: "def", commentId: uuidv4() },
		]),
	},
];
