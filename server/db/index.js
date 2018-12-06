var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

module.exports = function () {
  mysql.createConnection({
    user: 'root',
    database: 'chat'
  }).connect();
};
// connect: dbConnection.connect();
//defines the messages and users controllers that the app will use

