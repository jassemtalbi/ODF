const mongoose = require('mongoose')

const ProjectSchema = new mongoose.Schema(
	{
		title: { type: String, required: true },
		description: { type: String, required: true, },
		event: { type: String, required: true, },
        image: { type: String, required: true },

	},
	{ collection:'project' } //specification 
)
const model = mongoose.model('ProjectSchema', ProjectSchema)

module.exports = model