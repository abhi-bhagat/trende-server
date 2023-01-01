exports.up = function (knex) {
	return (
		knex.schema
			//products table
			.createTable(`products`, (table) => {
				table.string("product_id", 255).primary().notNullable();
				table.string("product_name", 255).notNullable();
				table.text("product_description", "longText");
				table.string("product_category", 255).notNullable();
				table.string("product_color", 255);
				table.integer("product_qty").unsigned().notNullable().defaultTo(0);
				table.float("product_price").unsigned().notNullable();
				table.integer("product_stars").unsigned();
				table.json("product_reviews");
			})
			//customers table
			.createTable("customers", (table) => {
				table.string("customer_id", 255).primary().notNullable();
				table.string("customer_email", 255).unique().notNullable();
				table.string("customer_password", 255).notNullable();
				table.string("customer_fname", 255).notNullable();
				table.string("customer_lname", 255).notNullable();
				table.text("customer_billing_address", "longText").notNullable();
				table.string("customer_shipping_address", 1000).unique().notNullable();
				table.string("customer_phone").notNullable();
			})

			//orders table
			.createTable("orders", (table) => {
				table.string("order_id", 255).primary().notNullable();
				table
					.string("customer_id", 255)
					.references("customer_id")
					.inTable("customers")
					.onUpdate("cascade")
					.onDelete("cascade");
				table.float("order_amount").notNullable();
				table.string("customer_shipping_address", 1000).notNullable();

				table.timestamp("order_time").defaultTo(knex.fn.now());
				table.string("order_status", 255).notNullable();
			})
			// order details table
			.createTable("order-details", (table) => {
				table.string("order-details_id", 255).primary().notNullable();
				table
					.string("order_id", 255)
					.references("order_id")
					.inTable("orders")
					.onUpdate("cascade")
					.onDelete("cascade");
				table
					.string("product_id", 255)
					.references("product_id")
					.inTable("products")
					.onUpdate("cascade")
					.onDelete("cascade");
				table.float("product_price");

				table.integer("quantity");
			})
			//categories
			.createTable("categories", (table) => {
				table.string("category_id", 255).primary().notNullable();
				table.string("category_name", 255).unique().notNullable();
			})
			//product categories
			.createTable("product_categories", (table) => {
				table.string("product_category_id", 255).primary().notNullable();
				table
					.string("product_id", 255)
					.references("product_id")
					.inTable("products")
					.onUpdate("cascade")
					.onDelete("cascade");
				table
					.string("category_id", 255)
					.references("category_id")
					.inTable("categories")
					.onUpdate("cascade")
					.onDelete("cascade");
			})
	);
};

exports.down = function (knex) {
	return knex.schema
		.dropTable("product_categories")
		.dropTable("categories")
		.dropTable("order-details")
		.dropTable("orders")
		.dropTable("customers")
		.dropTable("products");
};
