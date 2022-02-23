const express = require('express');
const fs = require('fs');
const cors = require('cors');
const cartRouter = require('./cartRouter');
const app = express();
const path = require('path');
const filePath = path.join(__dirname, './db/products.json');

app.use(express.json());
app.use(cors());
app.options('*', cors());
app.use('/', express.static('./public'));
app.use('/api/cart', cartRouter);

app.get('/api/products', (req, res) => {
    console.log('filePath', filePath)
    fs.readFile(filePath, 'utf-8', (err, data) => {
        if (err) {
            res.send(JSON.stringify({result: 0, text: err}));
        } else {
            res.send(data);
        }
    });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server started at port ${port}`);
});

// app.get(); // READ
// app.post(); // CREATE
// app.put(); // UPDATE
// app.delete(); // DELETE
