'use strict'

module.exports = hash

const crypto = require('crypto')

function hash(length = 20) {

    // You can use different implementations of the
    // hashing algorithm here. If they meet the requirements
    // defined by the test for hash(), you are free to refactor
    // at your own discretion.
    // If the cryptographic quality of the generated hash
    // might become relevant in the future, you would add a test
    // that tests against the required quality. This might lead
    // to failure of one of the implementations.

    return hashAlgorithm2(length)

}

function hashAlgorithm1(length) {

    return crypto
        .randomBytes(length)
        .toString('base64')     // convert to base64 format
        .slice(0, length)       // return required number of characters
        .replace(/\+/g, '0')    // replace '+' with '0'
        .replace(/\//g, '0')    // replace '/' with '0'

}

function hashAlgorithm2(length) {

    const characterSet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'

    let hash = ''

    for (let i = 0; i < length; i++) {

        const pos = Math.floor((Math.random() * (characterSet.length - 1)) + 1)
        hash += characterSet[pos]

    }

    return hash

}
