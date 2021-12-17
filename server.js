const { request, response } = require('express');
const express = require ('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT|| 3000;
// importing mongoose
const mongoose = require('mongoose');
// importing todoController
const todoController = require('./controllers/todoController')

app.use(express.json());

app.get('/',(request,response)=>{
    response.status(200).json({message:"Hello Welcome to my todo API"});
});

app.post('/todo',todoController.addTodo);
app.get('/todo',todoController.getAllTodo);
app.patch('/todo/:todoId',todoController.updateById);
app.delete('/todo/:todoId',todoController.deleteById);
app.get('/todo/:todoId',todoController.getTodoById);

app.listen(port,()=>{
    console.log("The server is running on port 3000",);
    mongoose.connect(process.env.DB_URL)
    .then(function(){
        console.log("DataBase is connected");
    })
    .catch(function(error){
        console.log("DataBase not connect",error.message);
    });
});


