var fs = require('fs');
var express = require('express');
var router = express.Router();
var dir = path.join(__dirname, 'public');

/* GET users listing. */
router.get('/', function(req, res, next) {
  var buttPath = path.join(dir, "butts");
  var buttPic = randomButt(buttPath);
  buttPath = path.join(buttPath, buttPic.name)
  var s = fs.createReadStream(buttPath);
    s.on('open', function () {
        res.set('Content-Type', 'image/jpeg');
        s.pipe(res);
    });
    s.on('error', function () {
        res.set('Content-Type', 'text/plain');
        res.status(404).end('Not found');
    });
});

function randomButt(buttPath) {
  var buttDir = fs.opendirSync(buttPath);
  var buttFiles = [];
  var buttFile = null;

  while ((buttFile = buttDir.readSync()) != null ) {
    buttFiles.push(buttFile)
    }

  var maximumButtocks = buttFiles.length;
  var randomNumber = Math.random();
  var randomButt = buttFiles[Math.floor(randomNumber * maximumButtocks)];

  return randomButt;

}


module.exports = router;
