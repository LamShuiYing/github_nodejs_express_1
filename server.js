var express = require('express');
var app = express();
var port = process.env.PORT || 8080;

var morgan = require('morgan');

app.use(morgan('dev'));

app.use('/', function(req, res){
	res.send('Eerste Express programma die op Heroku te zien is');
});
app.listen(port);

console.log('server draait op port ' + port);
