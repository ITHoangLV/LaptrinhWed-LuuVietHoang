const db = require('../configs/database');

const User = {
    getAll: (callback) => {
        db.query('SELECT * FROM users', callback);
    },
    create: (name, email, mobile, password, callback) => {
        db.query('INSERT INTO users (name, email, mobile, password) VALUES (?, ?, ?, ?)', [name, email, mobile, password], callback);
    },
    update: (id, name, email, mobile, password, callback) => {
        db.query('UPDATE users SET name = ?, email = ?, mobile = ?, password = ? WHERE id = ?', [name, email, mobile, password, id], callback);
    },
    delete: (id, callback) => {
        db.query('DELETE FROM users WHERE id = ?', [id], callback);
    }
};

module.exports = User;