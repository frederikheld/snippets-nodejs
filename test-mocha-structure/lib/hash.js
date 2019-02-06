'use strict'

module.exports = hash

const crypto = require('crypto')

function hash(length = 20) {

    // You can use different implementations of the
    // hashing algorithm here as long as they meet the
    // requirements defined in the tests for hash().
    //
    // If other requirements will become relevant in the
    // future (like the quality of the generated hash),
    // one or both of them might fail.
    //
    // But under the eyes of the current tests they
    // are exactly the same and both valid.


    // implementation A:

    const characterSet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'

    let hash = ''

    for (let i = 0; i < length; i++) {

        const pos = Math.floor((Math.random() * (characterSet.length - 1)) + 1)
        hash += characterSet[pos]

    }

    return hash


    // implementation B:

    // return crypto
    //     .randomBytes(length)
    //     .toString('base64')     // convert to base64 format
    //     .slice(0, length)       // return required number of characters
    //     .replace(/\+/g, '0')    // replace '+' with '0'
    //     .replace(/\//g, '0')    // replace '/' with '0'

}
