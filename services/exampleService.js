const request = require("request");
const genRand = require('../utils/generateRandomMatchId')

const exampleSVC = async () => {
  //TODO: use fetch
  request(
    "https://jsonplaceholder.typicode.com/todos/1",
    (error, response, body) => {
      console.error("error:", error); // Print the error if one occurred
      console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
      console.log("body:", body); // Print the HTML 
      return body
    }
  ).then(res => {
      //Do stuff to response...
      return res
  }).catch(err => {
      throw new Error(err)
  })
};

module.exports = exampleSVC;
