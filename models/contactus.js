const mongoose = require('mongoose')

const ContactusSchema = new mongoose.Schema(
	{
        fullname: { type: String, required: true },
		subject: { type: String, required: true },
		text: { type: String, required: true, },
        email: { type: String, required: true },

	},
	{ collection: 'contactus' } //specification 
)



const model = mongoose.model('ContactusSchema', ContactusSchema)

module.exports = model