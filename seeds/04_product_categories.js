const productCategoryData = require("../seeds_data/product_categories_data");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
	// Deletes ALL existing entries
	await knex("product_categories").del();
	//insert data into the table
	await knex("product_categories").insert(productCategoryData);
};
