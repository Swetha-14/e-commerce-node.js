var express = require('express');
var ProductController = require('./controllers/ProductController');

var app = express();
app.set('view engine', 'ejs');

app.use(express.static('./public'));
ProductController(app);

app.listen(3000);
console.log('Sever listening on 3000!');