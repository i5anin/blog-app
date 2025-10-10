require('dotenv').config();
const chalk = require('chalk');
const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const routes = require('./routes');
const path = require('path');

const port = 3001
const app = express()

const distPath = path.join(__dirname, '..', 'frontend', 'dist');
app.use(express.static(distPath));

app.use(cookieParser())
app.use(express.json())

app.use('/api', routes)

app.get(/^\/(?!api).*/, (req, res) => {
    res.sendFile(path.join(distPath, 'index.html'));
});

mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => {
        app.listen(port, () => {
            console.log(chalk.bgCyan(`Server live on port ${port}`))
        })
    })
