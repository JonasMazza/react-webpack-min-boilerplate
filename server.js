const express = require("express");
const webpack = require("webpack");
const webpackDevMiddleware = require("webpack-dev-middleware");
const webpackHotMiddleware = require("webpack-hot-middleware");

const app = express();
const config = require("./webpack.dev.js");
const compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
}));

app.use(webpackHotMiddleware(compiler));

app.listen(config.devServer.port, function() {
  console.log("My app is listening on port " + config.devServer.port);
});