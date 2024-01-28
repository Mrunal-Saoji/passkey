const express = require("express")

const app = express();
const host = '0.0.0.0'
const port = process.env.PORT || 3000;

app.get('/',(req,res) => {
    res.send('Hello Universe')
})

app.listen(port,()=>{
    console.log(`App is listening on port ${port}`)
})