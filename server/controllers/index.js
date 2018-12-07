var models = require('../models');

module.exports = {
  messages: {
    get: function(req, res) {
      models.messages.get(function(err, results) {
        if (err) {
          console.log('YOU FOOL');
        }
        res.json(results);
      });
    },

    post: function(req, res) {
      var params = [req.body.message, req.body.username, req.body.username];
      models.messages.post(params, function(err, results) {
        if (err) {
          console.log('error');
        }
        res.sendStatus(201);
      }); 
    }
  }, // a function which can be used to insert a message into the database

  users: {
    // Ditto as above.
    get: function(req, res) {
      models.users.get(function(err, results) {
        if (err) {
          console.log('YOU FOOL');
        }
        res.json(results);
      });
    },
    
    post: function(req, res) {
      console.log('got to the post');
      console.log('REQ.BODY ->>>>>>>>>>', req.body);
      var params = [req.body.username];
      models.users.post(params, function(err, results) {
        
        if (err) {
          console.log('error');
        }
        res.sendStatus(201);
      }); 
    }
  }
};
// messages: {
//   get: function (req, res) {}, // a function which handles a get request for all messages
//   post: function (req, res) {} // a function which handles posting a message to the database
// },

// users: {
//   // Ditto as above
//   get: function (req, res) {},
//   post: function (req, res) {}
// }


