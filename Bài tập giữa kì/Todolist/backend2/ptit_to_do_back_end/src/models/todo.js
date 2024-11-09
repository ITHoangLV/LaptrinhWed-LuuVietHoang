const db = require('../configs/database');

const Todo = {
    getAll: (callback) => {
        db.query('SELECT * FROM todos', callback);
    },
    create: (title, description, due_date,completed, callback) => {
        db.query('INSERT INTO todos (title, description, due_date,completed) VALUES (?, ?, ?,?)', [title, description, due_date,completed], callback);
    },
    update: (title, description, due_date, completed, id, callback) => {
        console.log("thua abc xyz ",id, title,description, completed, due_date)
        db.query('UPDATE todos SET title = ?, description = ?, due_date = ?, completed = ? WHERE id = ?', [ title, description, due_date, completed, id], callback);
    },
    delete: (id, callback) => {
        db.query('DELETE FROM todos WHERE id = ?', [id], callback);
    }
};

module.exports = Todo;