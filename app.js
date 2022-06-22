const express = require('express')
const morgan = require('morgan')
const giftRouter = require("./routes/gift-exchange")

const app = express()

module.exports=app;

app.use(morgan('tiny'))
app.use(express.json())
app.use("/gift-exchange", giftRouter)

app.get('/', (req, res) => {
   console.log("Hello!");
   res.status(200).json({"ping": "pong"});
})
