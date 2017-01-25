import express from 'express';
import path from 'path'

import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackConfig from '../webpack.config.dev'

let app = express();

app.use(webpackMiddleware(webpack(webpackConfig)))

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, './index.html'))
    // res.send({status: 'ok'});
});

app.listen(5000,() => console.log('runing on localhost:5000'));