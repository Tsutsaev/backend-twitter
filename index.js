const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose')


app.use(express.json())
app.use(require('./routes/users.routes'))
app.use(require('./routes/twitt.routes'))



mongoose.connect('mongodb+srv://djamalayl32:yakhya@cluster0.eb0ykyh.mongodb.net/backend-twitter')
.then(() => console.log('Успешно соединились с сервером MongoDB'))
.catch(() => console.log('Ошибка при соединении с сервером MongoDB'))

app.listen(3000, () => {
    console.log('Сервер запущен успешно')
})