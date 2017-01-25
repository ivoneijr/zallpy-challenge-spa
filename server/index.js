import express from 'express';
import path from 'path'

let app = express();


app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, './index.html'))
    // res.send({status: 'ok'});
});

app.listen(5000,() => console.log('runing on localhost:5000'));