/**
 * Created by Office on 10/13/2016.
 */
// Module declaration
var express=require('express');
var app=express();
var PORT=process.env.PORT || 3000;
// Crete Data objects
var todos=[
    {
        id:1,
        discription:'Meet my friend',
        complited:false
    },
    {
        id:2,
        discription:'Morning gym',
        complited:true
    },
    {
        id:3,
        discription:'Going to hydrabad at night 9:30pm',
        complited:false
    },
    {
        id:4,
        discription:'Movie Time',
        complited:false
    }

]
// Create webserver

app.use(express.static(__dirname+'/public'));
app.get('/About',function (req,res) {
    res.write('<h1>About Page</h1>');
});
// Get All todos

app.get('/todos',function (req,res) {
   res.json(todos);
});

// GET request from id:
app.get('/todos/:id',function (req,res) {
    
    var todoId = parseInt(req.params.id);
    var mathchTodo;
    todos.forEach(function (todoitem) {
        if(todoId === todoitem.id)
        {
            mathchTodo = todoitem;
        }
    });
    if(mathchTodo)
    {
        res.json(mathchTodo);
    }
    else
    {
        res.status(404).send('No data avilable this id ' + todoId);

    }

});

app.listen(PORT,function () {

    console.log('Server Running on port :'+ PORT + '!');

});