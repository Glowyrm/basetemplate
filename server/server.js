var express = require('express');
var path = require('path');
var config = require('../webpack.config.js');
var webpack =require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var app = express();

var compiler = webpack(config);

//sets up webpack hot reloader using config file for settings, noInfo - turns off console logs, publicPath - tells were to output bundle file
app.use(webpackDevMiddleware(compiler, {noInfo: true, publicPath: config.output.publicPath}))
app.use(webpackHotMiddleware(compiler));

// will serve static files (bundle.js) from "dist" folder howdy
app.use(express.static('./dist'));

// if root folder is accessed we will serve the index.html file
app.use('/', function (req, res) {
    res.sendFile(path.resolve('client/index.html'));
});

var port = 3000;

app.listen(port, function(error) {
  if (error) throw error;
  console.log("Express server listening on port", port);
});
