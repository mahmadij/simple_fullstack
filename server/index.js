const express = require('express')
const path = require('path')

const app = express()
console.log(path.join(__dirname,'../client/public'))
app.use(express.static(path.join(__dirname,'../client/public')))

app.get('',(req,res)=>{
    res.send('hello world')
})

app.listen(3000,()=>{
    console.log('Server running on port 3000')
})