var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config.js')
var port = process.env.PORT ? process.env.PORT : 3030
var host = process.env.HOST ? process.env.HOST : '0.0.0.0'

new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    contentBase: config.output.path,
    hot: true,
    historyApiFallback: {
        disableDotRule: true
    },
    quiet: false,
    noInfo: false,
    disableHostCheck: true,
    // progress: true,
    stats: {
      assets: true,
      colors: true,
      version: true,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: true
    }
}).listen(port, host, function (err) {
    if (err) {
        console.log(err);
    }

  console.log('Listening at ' + host + ':' + port);
});
