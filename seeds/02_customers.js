const customerData = require("../seeds_data/customers_data");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
	// Deletes ALL existing entries
	await knex("customers").del();
	//insert data into the table
	await knex("customers").insert(customerData);
};
