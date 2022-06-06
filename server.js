const { request } = require('express');
const express = require('express')
const app = express()
const PORT = 8000;
const tea = {
    'green':{
        'origin': 'China',
        'waterTemp':'120',
        'steepTime': '5',
        'caffineLevel':'80mg',
        'type': 'black',

    }
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api', (request,response) => {
    response.json(tea)
})

app.listen(process.env.PORT || PORT, ()=> {
    console.log(`Server is doing it's thing thing on ${PORT}`)
})