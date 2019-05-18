const PORT = 8080;
const exp = require('express');
const app = new exp();
const path = require('path');
const bodyParser = require('body-parser');

// app.use(exp.static(path.join(__dirname, 'dist')));

// app.listen(PORT, function() {
// 	console.log('Express server listening on port ', PORT); // eslint-disable-line
// });

// app.get('/', function (req,res) {
// 	res.sendFile(path.join(__dirname, 'dist/index.html'));
// });
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.post("/upload",function(req,res){
	console.log(req.body);
});

app.listen(PORT, function() {
  console.log('Express server listening on port ', PORT); // eslint-disable-line
});