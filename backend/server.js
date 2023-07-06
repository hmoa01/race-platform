const express = require('express')
const mongoose = require('mongoose')
const { PORT, DB_URL } = require('./config/config.js')



mongoose.connect(DB_URL).then(() => {console.log("MongoDB Conected!")}).catch((err) => {console.log(err);})

const app = express()

app.use(express.json())
app.use('/', require('./routes/index.js'))


app.get('/',(req, res) => {
    res.send("Cao sa servera")
})



app.listen(PORT,()=>{
    console.log("Server je pokrenut na portu 4000");
})