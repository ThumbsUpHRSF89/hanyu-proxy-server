const express = require('express');
const path = require('path');
const request = require('request-promise');

const app = express();
const port = 8000;

app.use('/product/:id/', express.static(path.join(__dirname, './public')));

app.get('/ms/:serviceName', (req, res) => {
  const { serviceName } = req.params;
  const ports = {
    // relatedProduct: 8001,
    // reviewSection: 8002,
    // productComparison: 8003,
    itemDetails: 8004,
  }
  // const routes = {
  //   itemDetails: 'item_detail',
  //   relatedProduct: 'related_product',
  // }
  const url = routes[serviceName];

  request(`http://localhost:${ports[serviceName]}/bundle.js`)
    .then(body => res.send(body))
    .catch((e) => {
      res.sendStatus(500);
    });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
