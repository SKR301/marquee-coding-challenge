const client = require('./db');
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.listen(3000, () => {
    console.log('Server listening at 3000');
});

client.connect();

app.get('/companies', (req, res) => {
    client.query(`SELECT * FROM companies`, (err, result) => {
        if(!err){
            res.send(result.rows);
        } else {
            res.send('Some error while showing');
        }
    });
    client.end;
});

app.post('/companies', (req, res) => {
    client.query(`INSERT INTO companies(cin, company) VALUES ('${req.body.cin}', '${req.body.company}')`, (err, result) => {
        if(!err){
            res.send('Added successfully');
        } else {
            console.log(err);
        }
    });
    client.end;
});
