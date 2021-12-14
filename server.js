const { request, response } = require('express');
const express = require ('express');
const app = express();
// importing mongoose
const mongoose = require('mongoose');
// importing todoController
const todoController = require('./controllers/todoController')
app.get('/',(request,response)=>{
    response.send("Hello this is a get response");
})

app.post('/',(request,response)=>{
    response.send('hello this is a post response')
})
app.listen(3000,()=>{
    console.log("The server is running on port 3000");
    mongoose.connect('mongodb+srv://Christabel:1234@cluster0.vzylt.mongodb.net/todo_db?retryWrites=true&w=majority')
    .then(function(){
        console.log("DataBase is connected");
    })
    .catch(function(error){
        //console.log("DtaBase not connect",error)
        console.log("DataBase not connect",error.message);
    });
})


app.get('/todos',(request,response)=>{
    response.send([{
        'title':'plan trip to Accra',
        'description':'I will be going to Accra this week',
        'time':'Today',
        'iscompleted':false
    }]);
})
// listening to request on localhost por 5010
app.get('/users',(request,response)=>{
    response.send([{
        'username':'Bell Brown',
        'password':'benard'
    }])
})
