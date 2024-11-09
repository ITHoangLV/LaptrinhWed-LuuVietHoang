const Todo = require('../models/todo');

exports.getAllTodos = (req, res) => {
    Todo.getAll((err, results) => {
        if (err) return res.status(500).json({ error: err });
        res.status(200).json(results);
    });
};

exports.createTodo = (req, res) => {
    const { title, description, dueDate } = req.body;
    const completed = 0;
    Todo.create(title, description, dueDate,completed, (err, result) => {
        if (err) return res.status(500).json({ error: err });
        res.status(201).json({
            id: result.insertId,
            title,
            description,
            dueDate,
            completed
        });
    });
};

exports.updateTodo = (req, res) => {
    const { id } = req.params;
    console.log(req.body)
    const { title, description, completed,due_date } = req.body;
    Todo.update(title, description, due_date, completed, id, (err, result) => {
        if (err) return res.status(500).json({ error: err });
        res.status(200).json({
            title,
            description,
            completed,
            due_date,
            id: parseInt(id)
        });
    });
};

exports.deleteTodo = (req, res) => {
    const { id } = req.params;
    Todo.delete(id, (err, result) => {
        if (err) return res.status(500).json({ error: err });
        res.status(200).json({message: 'Todo deleted successfully'});
    });
};