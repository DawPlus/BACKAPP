const express = require('express')
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const route = require('./routes');
const path = require('path');

app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse various different custom JSON types as JSON
app.use(bodyParser.json({ type: 'application/json' }));
// parse some custom thing into a Buffer
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }));
// parse an HTML body into a string
app.use(bodyParser.text({ type: 'text/html' }));
app.use(bodyParser.urlencoded({ extended: false }))

// Logging 
app.use((req, res, next) => {
    console.log('Request Received: ', new Date());
    next();
  });

      
app.use('/api', route);
app.use('/static/video', express.static(__dirname + '/uploads/video'));
app.use('/static/map', express.static(__dirname + '/uploads/map'));
app.use('/static/guide', express.static(__dirname + '/uploads/guide'));
app.use('/static/screenshot', express.static(__dirname + '/uploads/screenshot'));


app.use('/', express.static(path.resolve(__dirname, '../build')));
app.get('*', (req, res, next) => {
    if(req.path.split('/')[1] === 'static') return next();
    res.sendFile(path.resolve(__dirname, '../build/index.html'));
});

//app.use('/public',express.static('uploads'));
// app.get('/api/list', (req, res) => {
//     db( async (connection)=>{
//         const results = await query(connection, 'SELECT * FROM USER').catch(console.log);
//         return res.json({ results });
//     })
//  });


//  app.get('/api/list2', (req, res) => {
//     db( async (connection)=>{
//         const results = await query(connection, `SELECT * FROM USER WHERE ID=?`,['ADMIN']).catch(console.log);
//         return res.json({ results });
//     })
//  });


// app.get('/', (req, res) => res.send('Hello World!'))
// app.post("/hello", (req, res) => res.send('Hello POST World!'))
// app.all('/ping', (req, res) => res.send(new Date()))

app.listen(8080, () => console.log(`Example app listening on port ${8080}!`))