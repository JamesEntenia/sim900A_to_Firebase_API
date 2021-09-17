const express = require('express')
const bodyParser = require('body-parser')
const app = express()

const PORT = process.env.PORT||3000

app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))



const messageRoute = require('./routes/test')

app.use('/test',messageRoute)


app.listen(PORT, (result)=>{
    console.log(`Port is listening in port ${PORT}`)
})