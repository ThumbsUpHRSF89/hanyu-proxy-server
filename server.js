const express = require('express');
const path = require('path');

const app = express();
const port = 8000;

app.use('/product/:id/', express.static(path.join(__dirname, './public')));

app.listen(port, () => console.log(`Listening on port ${port}`));
