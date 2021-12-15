const { request, response } = require('express');
const express = require ('express');
const app = express();
// importing mongoose
const mongoose = require('mongoose');
// importing todoController
const todoController = require('./controllers/todoController')

app.use(express.json());

app.post('/todo',todoController.addTodo);
app.get('/todo',todoController.getAllTodo);
app.put('/todo',todoController.updateById);
app.delete('/todo',todoController.deleteById);
app.get('/todo/:todoId',todoController.getTodoById);

app.listen(3021,()=>{
    console.log("The server is running on port 3000");
    mongoose.connect('mongodb+srv://Christabel:1234@cluster0.vzylt.mongodb.net/todo_db?retryWrites=true&w=majority')
    .then(function(){
        console.log("DataBase is connected");
    })
    .catch(function(error){
        console.log("DataBase not connect",error.message);
    });
});


