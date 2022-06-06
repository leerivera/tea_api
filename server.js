const express = require('express')
const app = express()

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.listen(8000, ()=> {
    console.log(`Server is doing it's thing thing.`)
})