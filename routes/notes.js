const fb = require('express').Router();
const fs = require('fs');
const file = './db/db.json'


// GET Route for retrieving all the feedback
fb.get('/', (req, res) => { 

fs.readFile(file, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
    } else {
      const parsedData = JSON.parse(data);
         res.json(parsedData)

    }
  });

});

// POST Route for submitting feedback
fb.post('/', (req, res) => {
console.log("=======================================")
console.log(req.body)
console.log("=======================================")
res.send("post api notes route")
});

module.exports = fb;
