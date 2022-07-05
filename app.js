const express=require('express');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const morgan=require('morgan');
const expressValidator = require('express-validator');
const cookieParser=require('cookie-parser');
const cors=require('cors');



const server=express();
require('dotenv').config()


const PORT=process.env.PORT;
const DB=process.env.DATABASE;
const authRouter=require('./Router/auth')
const userRoutes=require('./Router/user');
const categoryRoutes=require('./Router/category');
const braintreeRoutes=require('./Router/braintree')
const productRoutes=require('./Router/product');
const orderRoutes = require('./Router/order');


mongoose.connect(DB,{
    useNewUrlParser:true
}).then(()=>{
    console.log("connected to DB");
}).catch(err=>{
    console.log(err);
})

server.use(cookieParser());
server.use(expressValidator())
server.use(cors());
server.use(morgan('dev'));
server.use(bodyParser.json());
server.use('/api',authRouter);
server.use('/api',userRoutes);
server.use('/api',categoryRoutes)
server.use('/api',productRoutes);
server.use('/api',braintreeRoutes);
server.use('/api',orderRoutes);














server.get('/user',(req,res)=>{
    res.json({
        user:"Rohit"
    })
})










server.listen(5000,()=>{
    console.log('Server is running at ',5000);
})