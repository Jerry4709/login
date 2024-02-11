const express = require('express')
const app = express()
const ejs  = require('mongoose')
const expressSession = require('express-session')
const flash = require('connect-flash')
const dbConnection = mysql.createPool

const indexController = require('./controlllers/indexController')
const loginController = require('./controlllers/loginController')
const registerController = require('./controlllers/loginController')
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded())
app.use(flash())
app.set('view engine','ejs')



app.get('/',indexController)
app.get('/login',loginController)
app.get('/register',loginController)

app.get('/',indexController)
app.listen(4000,()=>{
    console.log("APP LISEN PORT 4000")
})