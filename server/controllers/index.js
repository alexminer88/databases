var models = require('../models');

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
  // messages: {
  //   get: function (req, res) {}, // a function which handles a get request for all messages
  //   post: function (req, res) {} // a function which handles posting a message to the database
  // },

  // users: {
  //   // Ditto as above
  //   get: function (req, res) {},
  //   post: function (req, res) {}
  // }
};

