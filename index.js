const logEvents = require('./logEvent');

const EventEmitter = require('events');

class MyEmitter extends EventEmitter {};


//initialize oggetto
const myEmitter = new MyEmitter(); 

//add listener per evento log

myEmitter.on('log', (msg) => logEvents(msg));

setTimeout(() => {
    //emit event
    myEmitter.emit('log', 'Log event emitted');
}, 2000);