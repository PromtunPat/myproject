var express = require('express');
var router = express.Router();
var mysql = require('mysql');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});
var db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'chonburi'
});
db.connect(function (err) {
  if (err) console.log("DataBase NotFound");
  else console.log("connect");
});
router.get('/detail', function (req, res, result) {
  db.query("select detell from cbr", function (err, rows) {
    res.send(String(rows[0].detell));
  });
});
router.get('/detaill', function (req, res, result) {
  db.query("select detelll from cbr1", function (err, rows) {
    res.send(String(rows[0].detelll));
  });
});
router.get('/detail1', function (req, res, result) {
  db.query("select detell1 from bs", function (err, rows) {
    res.send(String(rows[0].detell1));
  });
});
router.get('/detail11', function (req, res, result) {
  db.query("select detell11 from bs1", function (err, rows) {
    res.send(String(rows[0].detell11));
  });
});
router.get('/detail2', function (req, res, result) {
  db.query("select detell2 from sk", function (err, rows) {
    res.send(String(rows[0].detell2));
  });
});
router.get('/detail22', function (req, res, result) {
  db.query("select detell22 from sk1", function (err, rows) {
    res.send(String(rows[0].detell22));
  });
});
router.get('/detail3', function (req, res, result) {
  db.query("select detell3 from bb", function (err, rows) {
    res.send(String(rows[0].detell3));
  });
});
router.get('/detail33', function (req, res, result) {
  db.query("select detell33 from bb1", function (err, rows) {
    res.send(String(rows[0].detell33));
  });
});



router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/sendMessage/:name/:email/:phone/:message', function (req, res) {
  var name = req.params.name;
  var email = req.params.email;
  var phone = req.params.phone;
  var message = req.params.message;
  console.log(name + email + phone + message);
  sql = "INSERT INTO test(name,email,phone,message)VALUES('" + name + "'," + "'" + email + "'," + "'" + phone + "'," + "'" + message + "'" + ");";
  console.log(sql);
  db.query(sql, function (err, result) {
    if (err) console.log(err);
    else console.log(result);
  })
});
//comment
router.get('/comment', function (req, res, next) {
  var sql = 'SELECT `no`, `name`, `email`, `phone`, `message` FROM `test` WHERE 1'
  db.query(sql, function (err, result) {
    res.send(result);
  })
})
//login
router.get('/login', function (req, res, next) {
  res.render('login', { title: 'Express' });
});

router.get('/loginsubmit/:user/:pass', function (req, res) {
  var user = req.params.user;
  var pass = req.params.pass;
  res.send("0")
  console.log(user+"  "+ pass)
  // var sql = 'SELECT `Username`, `Password` FROM `admin` WHERE 1'
  // db.query(sql, function (err, result) {
  //   res.send(result);
  // })
})


module.exports = router;

