var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

// module.exports = function () {
//   mysql.createConnection({
//     user: 'student',
//     database: 'student'
//   }).connect();
// };
// connect: dbConnection.connect();
//defines the messages and users controllers that the app will use
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'student',
  password: 'student',
  database: 'chat',
  multipleStatements: true

});

connection.connect(function(err, database) {
  if (err) {
    return;
  }
  console.log('connected', database);
});

//test
module.exports = connection;


// mysql.createConnection()