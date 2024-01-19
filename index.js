// Imports
require('dotenv').config();
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const logger = require('./lib/logger');
const cors = require('cors');


// Setup
const app = express();
const log = logger(app);


// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'static')));
app.use(cors());


// Routes
const items = require('./routes/items');
const addItem = require('./routes/addItem');

app.use('/items', items);
app.use('/addItem', addItem);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// development error handler
// will print stacktrace
app.use(function(err, req, res, next) {
    log.error(err);
    res.status(err.status || 500);
    res.json({
        message: err.message,
        error: err
    });
});

// Set Port 
app.set('port', process.env.PORT || 3001);

// Start Server
const server = app.listen(app.get('port'), () => 
console.log('Server listening on http://localhost:%d', server.address().port));