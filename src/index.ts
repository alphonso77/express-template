import express from 'express';

let app = express();
let helmet = require('helmet');
let port = normalizePort(process.env.PORT || 3002);
console.log(`Port set to ${port}`);
let home = require('./routes/home');
let bodyParser = require("body-parser");

app.use(bodyParser.json({ limit: "2mb" }));
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({ limit: "2mb", extended: true }));
app.use(express.static(__dirname + '/css'));

app.use(helmet())
app.use('/', home);
app.listen(port, () => {
    console.log(`Server Running on Port ${port}`);
});

app.get('/health', (req: any, res: any) => {
    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress
    console.log(`Health check at ${new Date()} | from IP: ${ip}`);
    res.json({
        version: require('../package.json').version,
        time: new Date(),
        message: 'I am healthy!'
      });
});

function normalizePort(val: number|string): number|string|boolean {
    let port: number = (typeof val === 'string') ? parseInt(val, 10) : val;
    if (isNaN(port)) return val;
    else if (port >= 0) return port;
    else return false;
}
