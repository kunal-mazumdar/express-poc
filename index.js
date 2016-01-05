var express = require('express'),
    app = express();

var router = express.Router();

router.route('/').get(function(req, res){
  res.json({"name": "Kunal Mazumdar"});
});

app.use('/', router);
app.listen(5555);
console.log('Application is listening....')