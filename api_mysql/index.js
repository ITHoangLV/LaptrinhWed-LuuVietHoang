const express = require('express');
const app = express();
const todosRouter = require('./src/routers/todos');

app.use(express.json());
app.use('/todos', todosRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
