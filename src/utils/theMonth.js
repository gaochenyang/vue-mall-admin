
let val = []
let date = new Date()
let days = date.getDate()
let hours = date.getHours()
let minutes = date.getMinutes()
let seconds = date.getSeconds()
let starttime = parseInt((date.getTime() - days * 24 * 60 * 60 * 1000 - hours * 60 * 60 * 1000 - minutes * 60 * 1000 - seconds * 1000) / 1000)
let endtime = parseInt((date.getTime() - hours * 60 * 60 * 1000 - minutes * 60 * 1000 - seconds * 1000) / 1000)
val.push(starttime, endtime)

export const getTheMonth = () => {
    return val
}
