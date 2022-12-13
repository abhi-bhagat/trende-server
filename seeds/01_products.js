const productData = require("../seeds_data/products_data");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
	// Deletes ALL existing entries
	await knex("products").del();
	//insert data into the table
	await knex("products").insert(productData);
};
