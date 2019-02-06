'use strict'

const hash = require('../../lib/hash')

const mocha = require('mocha')
const chai = require('chai')
const should = chai.should()

const chaiMatch = require('chai-match')
chai.use(chaiMatch)

describe('hash()', () => {

    context('called without parameters', () => {

        let token

        it('should return a token', () => {

            token = hash()
            should.exist(token)

        })

        describe('the returned token', () => {

            it('should be exactly 20 characters long', () => {
                token.length.should.equal(20)
            })

            it('should consist only of [a-zA-Z0-9]', () => {
                token.should.match(/^[a-zA-Z0-9]*$/gm)

                // NOTE: I'm not using ^[a-zA-Z0-9]{20}$ here since the length is already
                //       tested in a separate test before.
                //       Testing the length again would be repetition and would make it
                //       more difficult to update the tests if the length should change.
                //       Testing both together would make it more difficult to spot what's
                //       wrong if the test fails.
            })

        })

    })

    context('called with parameter n', () => {

        describe('the returned token', () => {

            it('should be exactly n characters long', () => {

                let token = hash(10)
                token.length.should.equal(10)

                let token2 = hash(342)
                token2.length.should.equal(342)

            })

        })

    })

    it('should return a different token every time it is called', () => {

        // create sample tokens:
        let tokens = []
        for (let i = 0; i < 10; i++) {
            tokens.push(hash())
        }

        // compare tokens:
        tokens.forEach((item, index) => {
            tokens.lastIndexOf(item).should.equal(index)
        })

        // NOTE: This test could theoretically fail, since the
        // tokens are generated independently and therefore
        // not checked against a database of already generated
        // tokens. The mathematical probability for this event
        // is really low though!

    })

})