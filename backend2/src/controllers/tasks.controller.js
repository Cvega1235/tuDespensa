import Task from '../models/task.model.js'

export const getTasks = async (req, res) => {
    //buscamos todas las tareas
    const tasks = await Task.find({
        //para mostrar solo las tareas del usuario usamos
        user: req.user.id
    })
    //}).populate('user') remplaza en la linea 8
    // esto nos dara toda la inf del usuario si es que lo necesitamos
    res.json(tasks)
};

export const createTasks = async (req, res) => {
    //para crear y guardar una nueva tarea "esto se puede usar para la lista de la despena?"
    const { title, description, date} = req.body

    const newTask = new Task({
        title,
        description,
        date,
        //para agarrar el id del usuario logeado usamos
        user: req.user.id
    })
    //guardamos
    const savedTask = await newTask.save();
    res.json(savedTask);
};

export const getTask = async (req, res) => {
    //buscar una tarea en especifico mediante el id
    const task = await Task.findById(req.params.id)
    if(!task) return res.status(404).json({message: 'Task not found'})
    res.json(task)
};

export const deleteTasks = async (req, res) => {
    //buscar una tarea en especifico mediante el id y lo elimina usando 'findByIdAndDelete'
    const task = await Task.findByIdAndDelete(req.params.id)
    if(!task) return res.status(404).json({message: 'Task not found'})
    return res.sendStatus(204); //el 204 es un mensaje de que todo salio bien pero no retornara nada
};

export const updateTasks = async (req, res) => {
    //buscar una tarea en especifico mediante el id y posteriormente lo actualiza 'findByIdAndUpdate'
    //mongoose devuelve el valor antiguo x eso ponemos new: true
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });
    if(!task) return res.status(404).json({message: 'Task not found'})
    res.json(task)
};
