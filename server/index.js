require('dotenv').config()
const express = require('express')
const connectBD = require('./DB/MODEL/connection')
const { productRouter } = require('./indexRouter')
const morgan = require('morgan')
var cors = require('cors')
const app = express()
app.use(express.json())
app.use(morgan('dev'))
app.use(cors())
app.use(express.json())
const nocache = require('nocache');

app.use('/api/v1',productRouter)
const port = 4000



connectBD()
app.listen(port, () => console.log(`Example app listening on port ${port}!`))