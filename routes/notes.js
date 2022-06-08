const fb = require('express').Router();
const fs = require('fs');
const {nanoid} = require('nanoid');
const file = './db/db.json'

const writeToFile = (destination, content) =>
  fs.writeFile(destination, JSON.stringify(content, null, 4), (err) =>
    err ? console.error(err) : console.info(`\nData written to ${destination}`)
  );

  const readAndAppend = (content, file) => {
    fs.readFile(file, 'utf8', (err, data) => {
      if (err) {
        console.error(err);
      } else {
        const parsedData = JSON.parse(data);
        parsedData.push(content);
        writeToFile(file, parsedData);
      }
    });
  };


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
    const finalData = req.body
    finalData.id = nanoid()
    readAndAppend(req.body, file)



    // console.log("=======================================")
    // console.log(req.body)
    // console.log("=======================================")
    res.send("post api notes route")
});

module.exports = fb;
