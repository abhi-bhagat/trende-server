const { v4: uuidv4 } = require("uuid");
const casual = require("casual");

module.exports = [
	{
		customer_id: uuidv4(),
		customer_email: casual.email,
		customer_password: casual.password,
		customer_fname: casual.first_name,
		customer_lname: casual.last_name,
		customer_billing_address: `6444 Prince Albasdfert StorageEvent, Vancouver Canada`,
		customer_shipping_address: `6444 Prince Alffbert StorageEvent, Vancouver Canada`,
		customer_phone: casual.phone,
	},
	{
		customer_id: uuidv4(),
		customer_email: casual.email,
		customer_password: casual.password,
		customer_fname: casual.first_name,
		customer_lname: casual.last_name,
		customer_billing_address: `6444 Prince Albeqqt StorageEvent, Vancouver Canada`,
		customer_shipping_address: `6444 Prince Albadsffeeert StorageEvent, Vancouver Canada`,
		customer_phone: casual.phone,
	},
	{
		customer_id: uuidv4(),
		customer_email: casual.email,
		customer_password: casual.password,
		customer_fname: casual.first_name,
		customer_lname: casual.last_name,
		customer_billing_address: `6444 Prince Albeqqqrrt StorageEvent, Vancouver Canada`,
		customer_shipping_address: `6444 Prince Albertsdwe StorageEvent, Vancouver Canada`,
		customer_phone: casual.phone,
	},
	{
		customer_id: uuidv4(),
		customer_email: casual.email,
		customer_password: casual.password,
		customer_fname: casual.first_name,
		customer_lname: casual.last_name,
		customer_billing_address: `6444 Prince Albasdfeert StorageEvent, Vancouver Canada`,
		customer_shipping_address: `6444 Prince Albejfgt StorageEvent, Vancouver Canada`,
		customer_phone: casual.phone,
	},
	{
		customer_id: uuidv4(),
		customer_email: casual.email,
		customer_password: casual.password,
		customer_fname: casual.first_name,
		customer_lname: casual.last_name,
		customer_billing_address: `6444 Prince Albert StfrddorageEvent, Vancouver Canada`,
		customer_shipping_address: `6444 Prince Albesgtbbrt StorageEvent, Vancouver Canada`,
		customer_phone: casual.phone,
	},
	{
		customer_id: uuidv4(),
		customer_email: casual.email,
		customer_password: casual.password,
		customer_fname: casual.first_name,
		customer_lname: casual.last_name,
		customer_billing_address: `6444 Prince Albertyert StorageEvent, Vancouver Canada`,
		customer_shipping_address: `6444 Prince Albiuuyyert StorageEvent, Vancouver Canada`,
		customer_phone: casual.phone,
	},
];
