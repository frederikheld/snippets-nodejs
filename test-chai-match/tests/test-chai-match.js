const chai = require('chai')

const chaiMatch = require('chai-match')
chai.use(chaiMatch)

const should = chai.should()

describe('can match regular expressions', () => {

    samples = {
        positive: [
            "U74ksufKJAufsu321hfa",
            "NUD7Dk99asjkdUIAK6D4",
            "ASJnfanaluhf3892hals"
        ],
        negative: [
            "dadh94",                        // right character set but too short
            ")($A§KJNAFFJKNasjnF(",          // right size but wrong character set
            "gnn984sl4jgo3n2in9gdg409j4g3",  // right character set but too long
            "N$(",                           // wrong character set and too short
            "jdln(dn3kon2i!2inOLfnlAIF$"     // wrong character set and too long
        ]
    }

    it('returns a string that is exactly 20 characters long and consists of [a-zA-Z0-9]', (done) => {

        const regex = /^[a-zA-Z0-9]{20}$/gm

        for (i in samples.positive) {
            samples.positive[i].should.match(regex)
        }

        for (i in samples.negative) {
            samples.negative[i].should.not.match(regex)
        }

        done()
    })
})