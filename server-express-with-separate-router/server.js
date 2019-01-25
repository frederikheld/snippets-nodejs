'use strict'

// -- imports

const express = require('express')


// -- create server

var app = express()

const routes = require('./routes')
app.use('/api', routes)

var server = app.listen(8080, () => {
    var port = server.address().port
    console.log('Server listening on port ' + port)
})


// -- exports

module.exports = server