/**
 * Created by Office on 10/13/2016.
 */
// Module declaration
var express=require('express');
var app=express();
var PORT=process.env.PORT || 3000;
// Create webserver
app.use(express.static(__dirname+'/public'));
app.get('/About',function (req,res) {
    res.write('<h1>About Page</h1>');
});


app.listen(PORT,function () {

    console.log('Server Running on port :'+ PORT + '!');

});