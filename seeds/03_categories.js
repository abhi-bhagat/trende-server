const categories_data = require("../seeds_data/categories_data");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
	// Deletes ALL existing entries
	await knex("categories").del();
	//insert data into the table
	await knex("categories").insert(categories_data);
};
