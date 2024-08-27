const {readFile, readFileSync} = require('fs')
const path = require('path')
const { sourceMapsEnabled } = require('process')
//problem 1
console.log('This is synchronus')
setTimeout(() => {
    console.log("This is asynchronus")
}, 2000);
console.log("End of script")

//problem 2
console.log('Interval started')
const theInterval = setInterval(() => {console.log('Repeating message')}, 3000);
setTimeout(() => {
    clearInterval(theInterval)
}, 10000);

//problem 3
readFile(path.join(__dirname + '/test.txt'), 'utf8',(err, data) => {
    if(err){
        console.log('Error reading file: ', err)
        return;
    }
    console.log('File content: ', data)
})
let first = readFileSync(path.join(__dirname + '/input.txt'), 'utf8')
console.log('Im running first: ', first)

//problem 4
let theData = readFileSync(path.join(__dirname + '/data.txt'), 'utf8')
console.log(theData)
setTimeout(() => {
    console.log('Starting async operation...')
    readFile(path.join(__dirname + '/asyncData.txt'), 'utf8', (err, data) => {
        if(err){
            console.log('Error: ', err)
            return;
        }
        console.log('The data: ', data)
    })
}, 2000);

//problem 5
console.log('Countdown Initiated...')
let countdown = 10
const count = setInterval(() => {
    console.log(countdown)
    countdown--
    if(countdown == 0){
        console.log('liftoff')
        clearInterval(count)
    }
}, 1000);