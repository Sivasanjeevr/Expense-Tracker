const express = require('express')
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

const dotenv = require('dotenv')
dotenv.config();


const bcrypt = require('bcrypt');

const {connect}  = require('./Repository/Database');
connect();

app.get('/',(req,res)=>{
    res.send('hello')
})

const {individualLogin, individualRegister} = require('./service/userAuthentication/IndividualAuth');

app.post('/register', async(req,res)=>{
    const hashPassword = await bcrypt.hash(req.body.password, 10);
    const result = await individualRegister(
        req.body.username,
        req.body.mobileNo,
        hashPassword,
        req.body.email,
        process.env.secretKeyForJwt,
    )
    res.send(result);
});

app.post('/login',async(req,res)=>{
    const result = await individualLogin(
        req.body.mobileNo,
        req.body.password,
        process.env.secretKeyForJwt,
    );
    res.send(result);
});

const {managementLogin,managementRegister} = require('./service/userAuthentication/ManagementAuth');

app.post('/register-management', async(req,res)=>{
    const hashPassword = await bcrypt.hash(req.body.password, 10);
    const result = await managementRegister(
        req.body.username,
        req.body.mobileNo,
        hashPassword,
        req.body.email,
        process.env.secretKeyForJwt,
    );
    res.send(result);
})

app.post('/login-management',async(req,res)=>{
    const result = await managementLogin(
        req.body.mobileNo,
        req.body.password,  
        process.env.secretKeyForJwt,
    )
    res.send(result);
})

const {addExpense} = require('./service/IndividualApi/AddExpense')

app.post('/add-expense', async(req,res)=>{
    const result = await addExpense(
        
    )
})

app.listen(process.env.PORT,(req,res)=>{
    console.log(`server running on port ${process.env.PORT}`);
} );