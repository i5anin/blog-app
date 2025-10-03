require('dotenv').config();
const chalk = require('chalk');
const express = require('express')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const routes = require('./routes')

const port = 3001
const app = express()

app.use(cookieParser())
app.use(express.json())

// app.use('/', routes)
app.use('/api', routes)

mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => {
        app.listen(port, () => {
            console.log(chalk.bgCyan(`Server live on port ${port}`))
        })
    })
