const mongoose = require('mongoose')

const AdminSchema = new mongoose.Schema(
	{
		username: { type: String, required: true, unique: true },
		firstname: { type: String, required: true, },
		lastname: { type: String, required: true},
		password: { type: String},
		email: { type: String, required: true },
		role: {type: String, required: true,default:'admin'},
		activated: {type: Number, required: true, default: 1},
		image: {type: String, required: false},
	},
	{ collection: 'admin' } //specification 
)
const model = mongoose.model('AdminSchema', AdminSchema)

module.exports = model