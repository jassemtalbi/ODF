const mongoose = require('mongoose')

const NewsletterSchema = new mongoose.Schema(
	{
		subject: { type: String, required: true },
		text: { type: String, required: true, },

	},
	{ collection: 'newsletter' } //specification 
)



const model = mongoose.model('NewsletterSchema', NewsletterSchema)

module.exports = model