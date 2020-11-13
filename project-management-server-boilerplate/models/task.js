// requerimos el paquete mongoose y a su 'Schema'
const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

// declaramos un nuevo Schema en la constante 'taskSchema'
const taskSchema = new Schema ({
    title: {type: String},
    description: {type: String},
    project: [{type: Schema.Types.ObjectId, ref: 'Project'}]  
});

const Task = mongoose.model('Task', taskSchema);
module.exports = Task;