var express    = require('express');
var bodyParser = require('body-parser');
var app = express();
var port = process.env.PORT || 3060;

// parse application/json
app.use(bodyParser.json({ type : '*/*' })); // force json

app.post('/:id/location', function(req, res){
	console.log('------------------------------------------------');
    console.log('User ID: ' + req.params.id);
    console.log('------------------------------------------------');
    //console.log('Headers:\n', req.headers);
    console.log(req.body);
    res.sendStatus(200);
});

app.listen(port);
console.log('Server started! At http://localhost:' + port);
