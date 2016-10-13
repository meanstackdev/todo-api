/**
 * Created by Office on 10/13/2016.
 */
var express=require('express');
var app=express();
var PORT=process.env.PORT || 3000;
// Create Server Request on local post
app.get('/',function (req,res) {
    res.send('Welcome to todo-api form node-express js !');
});
// Server Listen Port : 3000
app.listen(PORT,function () {

    console.log('Server Running on port :'+ PORT + '!');

});