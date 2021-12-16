const { response } = require('express');
const todoModel = require('../models/todoModels');

async function addTodo(request,response){
try{
    const newTodo = await todoModel.create(request.body);
    response.status(543).json(newTodo);
}
    catch (error) {
        console.log('something went wrong',error.message);
    }
}


async function getAllTodo(request,response){
    try{
        const getAll = await todoModel.find();
        response.status(200).json(getAll);

    } catch (error) {
        console.log("Something went wrong",error.message);
        response.status(400);
    }
}
async function getTodoById(request,response){
    try {
        const gettodo = await todoModel.findById(request.params.todoId);
    response.status(200).json(gettodo);
    } catch (error) {
       console.log("something went wrong",error.message); 
    }
}

async function updateById(request,response){
    try {
        const update = await todoModel.findByIdAndUpdate(request.params.todoId,request.body)
        response.status(200).json(gettodo);
    } catch (error) {
    console.log("something went wrong",error.message);
    }
}

function deleteById(request,response){

}

module.exports ={
    addTodo,
    getAllTodo,
    updateById,
    deleteById,
    getTodoById
}