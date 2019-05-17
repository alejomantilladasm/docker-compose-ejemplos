var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000;

    //Enable cors
    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
        next();
    });

    app.listen(port);

    var appRoutes = require('./routes/app.route');
    app.use('/', appRoutes);

console.log('Server Restfull on : ' + port);