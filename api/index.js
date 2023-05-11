const express = require('express')
const cors = require('cors');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(8);
const jwt = require('jsonwebtoken');
const secret = "asdfe45we45w345wegw"
const cookieParser = require('cookie-parser')
const User = require('./models/User')

const app = express();
app.use(cors({credentials: true, origin: "http://localhost:3000"}))
app.use(express.json())
app.use(cookieParser())

mongoose.connect("mongodb+srv://blog:LbfQ8XchDpUO2oPc@cluster0.zafixsd.mongodb.net/?retryWrites=true&w=majority")

app.post('/register', async (req, res) => {
    const {username, password} = req.body
    try {
        const userDoc = await User.create({
            username, 
            password: bcrypt.hashSync(password, salt),
        })
        res.json(userDoc)
    } catch (e) {
        res.status(400).json(e)
    }
})

app.post('/login', async (req, res) => {
    const {username, password} = req.body
    const userDoc = await User.findOne({username})
    const passOK = bcrypt.compareSync(password, userDoc.password)
    if (passOK) {
        // user logged in
        jwt.sign({username, id:userDoc._id}, secret, {}, (err,token) => {
            if (err) throw err;
            res.cookie('token', token).json('ok')
        })
    } else {
        // not logged in
        res.status(400).json('Wrong credentials')
    }
})

app.get('/profile', (req,res) => {
    const {token} = req.cookies;
    jwt.verify(token, secret, {}, (err, info) => {
      if (err) throw err;
      res.json(info);
    })
})

app.post('/logout', (req, res) => {
    res.cookie(token, '').json('ok')
})

app.listen(4000)

// FIX NOT WIRINT USER CORRCET USERNMAE CAUSES CRASHES
// FIX TOKEN CANNOT BE EMPTY THAT IS IT IS NOT DEFINED

//mongodb+srv://blog:<password>@cluster0.zafixsd.mongodb.net/?retryWrites=true&w=majority
//LbfQ8XchDpUO2oPc