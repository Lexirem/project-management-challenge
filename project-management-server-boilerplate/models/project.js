// requerimos el paquete mongoose y a su 'Schema'
const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

// declaramos un nuevo Schema en la constante 'projectSchema'
const projectSchema = new Schema({
    title:  String,
    description:  String,
    tasks: [{type: Schema.Types.ObjectId, ref: 'Task'}]
});


const Project = mongoose.model('Project', projectSchema);
module.exports = Project;