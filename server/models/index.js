var db = require('../db');

module.exports = {
  messages: {
    get: function (res, data, statusCode) {
      statusCode = statusCode || 200;
      res.writeHead(statusCode, {'Content-Type': 'application/json'});
      res.end(JSON.stringify(data));
    }, // a function which produces all the messages
    post: function (req, callback) {
      var data = '';
      req.on('data', function(chunk) {
        data += chunk;
      });
      req.on('end', function() {
        callback(JSON.parse(data));
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (res, data, statusCode) {
      statusCode = statusCode || 200;
      res.writeHead(statusCode, {'Content-Type': 'application/json'});
      res.end(JSON.stringify(data));
    },
    post: function (req, callback) {
      var data = '';
      req.on('data', function(chunk) {
        data += chunk;
      });
      req.on('end', function() {
        callback(JSON.parse(data));
      });
    }
  }
};

