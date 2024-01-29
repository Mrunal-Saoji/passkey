const express = require("express")

const app = express();
const host = '0.0.0.0'
const port = process.env.PORT || 3000;
const path =  require('path')

const layouts = require('express-ejs-layouts')
app.use(layouts)
app.set('views',path.join(__dirname, 'app/views'))
app.set('layout','layout/application')
app.set('view engine', 'ejs')

app.use('/',require('./config/routes'))

app.listen(port,()=>{
    console.log(`App is listening on port ${port}`)
})