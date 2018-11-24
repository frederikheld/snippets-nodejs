'use strict'

// -- imports

const express = require('express')


// -- describe api

var app = express()

app.get('/', (request, response) => {
    response.status(200).send('ok')
})

var server = app.listen(8080, () => {
    var port = server.address().port
    console.log('Server listening at port ' + port)
})


// -- exports

module.exports = server