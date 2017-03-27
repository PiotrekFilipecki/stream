var express = require('express')
var router = express.Router()

var requestTime = function (req, res, next) {
  req.requestTime = Date.now()
  next()
}

router.use(requestTime)


// define the home page route
router.get('/', function (req, res) {
  res.send('Heheheh home page')
  
})
// define the about route
router.get('/heheh', function (req, res) {
  
  var responseText = 'Hello World!<br>'
  responseText += '<small>Requested at: ' + req.requestTime + '</small>'
  res.send(responseText + " heheh")
})





module.exports = router