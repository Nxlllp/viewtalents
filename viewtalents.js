module.exports = function reee(d) {
d.command.add('viewtalents', () => {
d.send('S_REQUEST_CONTRACT', 1, {type:77})
})
}