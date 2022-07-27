const mongoose = require('mongoose')

const Schema =mongoose.Schema;

const techTaskSchema = new Schema(
    {
        username: {type: String,required: true},
        description: {type:String, required: true},
        duration: {type:Number, required: true},
        date:{type: Date, required: true}
    },
    {
        timestamps: true
    }
)

//in server.js => app.use(same name as 'tech-task', ...)
const TechTask = mongoose.model('tech-tasks', techTaskSchema) 
module.exports = TechTask 