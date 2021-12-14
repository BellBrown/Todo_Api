const todoModel = require('../models/todoModel');

function addTodo(request,response){

}

function getAllTodo(request,response){
response.send('Hello this is a getAllTodo controller')
}

function updateById(request,response){

}
function deleteById(request,response){

}

module.exports ={
    addTodo,
    getAllTodo,
    updateById,
    deleteById
}