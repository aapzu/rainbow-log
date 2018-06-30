
const superConsoleLog = console.log.bind(console)
const clc = require('cli-color')

const log = (text) => {
    if (!text) {
        throw new Error('Text to be logged required!')
    }
    let message = ""
    if (typeof text === 'string' || text instanceof String) {
        message = joinWithColor(text.split(" "))
    } else if (Array.isArray(text)) {
        message = joinWithColor(text)
    } else {
        message = text
    }
    superConsoleLog(message)
}

const joinWithColor = (list) => list.map((w) => {
    const color = clc.xterm(Math.floor(Math.random() * 256))
    return color(w)
})
    .join(' ')

module.exports = log


