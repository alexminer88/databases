var db = require('../db');

module.exports = {
  // messages: {
  //   get: function (res, data, statusCode) {
  //     statusCode = statusCode || 200;
  //     res.writeHead(statusCode, {'Content-Type': 'application/json'});
  //     res.end(JSON.stringify(data));
  //   }, // a function which produces all the messages
  //   post: function (req, callback) {
  //     var data = '';
  //     req.on('data', function(chunk) {
  //       data += chunk;
  //     });
  //     req.on('end', function() {
  //       callback(JSON.parse(data));
  //     });
  //   } // a function which can be used to insert a message into the database
  // },

  messages: {
    get: function(callback) {
      var queryString = 'SELECT * FROM messages';
      db.query(queryString, function(err, data, fields) {
        if (err) {
          callback(err);
        } else {
          callback(null, data, fields);
        }
      });
    },
    
    post: function(message, callback) {
      var queryString = `INSERT INTO messages VALUES (${message.message})`; // might need to fix this based on schema
      db.query(queryString, message, function(err, result) {
        if (err) {
          callback(err);
          
        } else {
          callback(null, result);
        }
      });
      
    }
  },

  users: {
    // Ditto as above.
    get: function(callback) {
      var queryString = 'SELECT * FROM users';
      db.query(queryString, function(err, data, fields) {
        if (err) {
          callback(err);
        } else {
          callback(null, data, fields);
        }
      });
    },
    
    post: function(username, callback) {
      console.log('USERNAME IS ->>>>>>>>', username);
      var queryString = `INSERT INTO users VALUES ("${username}")`; // might need to fix this based on schema
      db.query(queryString, function(err, result) {
        if (err) {
          console.log(err);
          callback(err);
          
        } else {
          callback(null, result);
        }
      });
      
    }
  }
};

