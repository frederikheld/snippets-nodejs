'use strict'

let chai = require('chai')
let chaiHttp = require('chai-http')
let should = chai.should()

chai.use(chaiHttp)

describe('chaiHttp: server is running', () => {

    let server

    beforeEach(() => {
        server = require('./../server')
    })

    afterEach(() => {
        server.close()
    })

    describe('GET /', () => {

        it('should respond with status 200', (done) => {
            chai.request(server)
                .get('/api/')
                .end((err, res) => {
                    should.not.exist(err)
                    should.exist(res)
                    res.should.have.status(200)
                    res.text.should.equal("ok")
                    done()
                })
        })

    })

    describe('GET /helloWorld', () => {

        it('should respond with status 200', (done) => {
            chai.request(server)
                .get('/api/helloWorld')
                .end((err, res) => {
                    should.not.exist(err)
                    should.exist(res)
                    res.should.have.status(200)
                    done()
                })
        })

        it('should return text "Go away!"', (done) => {
            chai.request(server)
                .get('/api/helloWorld')
                .end((err, res) => {
                    res.text.should.equal("Go away!")
                    done()
                })
        })

    })

    describe('GET /hello/:name', () => {
        it('should respond with status 200', (done) => {
            chai.request(server)
                .get('/api/hello/name')
                .end((err, res) => {
                    should.not.exist(err)
                    should.exist(res)
                    res.should.have.status(200)
                    done()
                })
        })
        it('should return text "Go away, John!" for given :name "John"', (done) => {
            chai.request(server)
                .get('/api/hello/John')
                .end((err, res) => {
                    res.text.should.equal("Go away, John!")
                    done()
                })
        })
        it('should return text "Go away, Jim!" for given :name "Jim"', (done) => {
            chai.request(server)
                .get('/api/hello/Jim')
                .end((err, res) => {
                    res.text.should.equal("Go away, Jim!")
                    done()
                })
        })
    })
})