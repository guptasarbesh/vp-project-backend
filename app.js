const express=require('express');
const path=require('path');
const bodyparser=require('body-parser');
const cors=require('cors');
const passport=require('cors');
const mongoose=require('mongoose');
const config=require('./config/database');

mongoose.connect(config.database);


//on connection
mongoose.connection.on('connected',() =>
{
    console.log('connected to database'+config.database);
});

//on error
mongoose.connection.on('error',(err) =>
{
    console.log('database error:'+err);
});


const app=express();

const users=require('./routes/users');

const port=3000;


app.use(cors());


app.use(express.static(path.join(__dirname,'public')));

//body parser middleware
app.use(bodyparser.json());


app.use('/users',users);

app.get('/',(req,res)=>{
    res.send("Invalid code");
});


app.listen(port,()=>

{ 
    console.log('server started on port'+port);

});