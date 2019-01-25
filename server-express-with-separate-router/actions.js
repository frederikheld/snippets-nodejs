actions = {}

actions.default = (req, res) => {
    res.status(200).send('ok')
}

actions.helloWorld = (req, res) => {
    res.status(200).send("Go away!")
}

actions.hello = (req, res) => {
    res.status(200).send("Go away, " + req.params.name + "!")
}

module.exports = actions