// const logEvents = require('./logEvent');

// const EventEmitter = require('events');

// class MyEmitter extends EventEmitter {};


// //initialize oggetto
// const myEmitter = new MyEmitter(); 

// //add listener per evento log

// myEmitter.on('log', (msg) => logEvents(msg));

// setTimeout(() => {
//     //emit event
//     myEmitter.emit('log', 'Log event emitted');
// }, 2000);
const http = require('http');
const path = require('path');
const fs = require('fs');
const fsPromises = require('fs').promises;

const logEvents = require('./logEvent');
const EventEmitter = require('events');
const { equal } = require('assert');
class MyEmitter extends EventEmitter { };
//initialize oggetto
const myEmitter = new MyEmitter(); 

const PORT = process.env.PORT || 3500; 

//server
const server = http.createServer((req, res) => {

        console.log(req.url, req.method);

        let filePath;

        if (req.url === '/' || req.url === 'index.html'){
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            path = path.join(__dirname, 'views', 'index.html');
            fs.readFile(path, 'utf8', (err, data) => {
                res.end(data); 
            });
        }


});

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));





//add listener per evento log

// myEmitter.on('log', (msg) => logEvents(msg));
//     myEmitter.emit('log', 'Log event emitted');
