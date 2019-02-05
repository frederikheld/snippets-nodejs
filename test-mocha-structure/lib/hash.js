'use strict'

module.exports = hash

function hash(length = 20) {

    const characterSet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'

    let hash = ''

    for (let i = 0; i < length; i++) {

        const pos = Math.floor((Math.random() * (characterSet.length - 1)) + 1)
        hash += characterSet[pos]

    }

    return hash

}
