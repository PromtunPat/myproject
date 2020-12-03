var express = require('express');
var router = express.Router();
var mysql = require('mysql');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
var db = mysql.createConnection({
  host : 'localhost',
  user : 'root',
  password:'',
  database : 'mysql'
});
db.connect(function(err){
  if(err) console.log("DataBase NotFound");
  else console.log("connect");
});
/*router.get('/accom', function(req, res, next) {
  res.render('accom', { title: 'Express' });
});
*/
// var con = mysql.createConnection({
//   host: "10.248.56.87",
//   user: "myadmin",
//   password: "@dmin123",
//   port: "3306",
//   database: "admin"
// });
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/sendMessage/:name/:email/:phone/:message', function(req,res){
  var name = req.params.name;
  var email = req.params.email; 
  var phone = req.params.phone; 
  var message = req.params.message; 

  sql = "select * from user_login where user='"+user+"'";
  sql += "and password ='"+pwd+"'";
   con.query(sql, function(err, result){
     if (err) throw err;
     //res.send("result = "+JSON.stringify(result));
     var resJson = "";
     if(result.length > 0){
       resJson = {"result":1};
     }else{
       resJson = {"result":0};
     }
     res.send(resJson);
   });
});
module.exports = router;

