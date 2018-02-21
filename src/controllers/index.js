const path = require('path'); // path is a built-in node library to handle file system paths

// There is no reason for the name here except as an example of how to set something for the POST
let name = 'unknown'; // We will set and get an arbitrary name

// function to handle requests to the main page
// controller functions in Express receive the full HTTP request
// and a pre-filled out response object to send
const hostIndex = (req, res) => {
  // path.resolve finds the absolute path for you
  // send the main.page.html file using a resolved absolute path
  // the res.sendFile action returns a file to a user
  // res.sendFile response to the HTTP request so you can't send any more data through HTTP
  // until the next request
  res.sendFile(path.resolve(`${__dirname}/../../views/index.html`));
};

// function to handle requests to the gallery page
// controller functions in Express receive the full HTTP request
// and a pre-filled out response object to send
const hostPage1 = (req, res) => {
  // path.resolve finds the absolute path for you
  // send the gallery.html file using a resolved absolute path
  // the res.sendFile action returns a file to a user
  // res.sendFile response to the HTTP request so you can't send any more data through HTTP
  // until the next request
  res.sendFile(path.resolve(`${__dirname}/../../views/page1.html`));
};

// function to handle requests to the gallery page
// controller functions in Express receive the full HTTP request
// and a pre-filled out response object to send
const hostPage2 = (req, res) => {
  // path.resolve finds the absolute path for you
  // send the gallery.html file using a resolved absolute path
  // the res.sendFile action returns a file to a user
  // res.sendFile response to the HTTP request so you can't send any more data through HTTP
  // until the next request
  res.sendFile(path.resolve(`${__dirname}/../../views/page2.html`));
};

// function to handle get request to send the name
// controller functions in Express receive the full HTTP request
// and a pre-filled out response object to send
const getName = (req, res) => {
  // res.json returns json to the page. Since this sends back the data through HTTP
  // you can't send any more data to this user until the next response
  res.json({ name });
};

// function to handle a request to set the name
// controller functions in Express receive the full HTTP request
// and get a pre-filled out response object to send
// ADDITIONALLY, with body-parser we will get the body/form/POST data in the request as req.body
const setName = (req, res) => {
  // check if the required fields exist
  // normally you would also perform validation to know if the data they sent you was real
  if (!req.body.firstname || !req.body.lastname) {
    // if not respond with a 400 error
    // (either through json or a web page depending on the client dev)
    return res.status(400).json({ error: 'firstname and lastname are both required' });
  }

  // if required fields are good, then set name
  name = `${req.body.firstname} ${req.body.lastname}`;

  // respond with our new name updated. This could just be a 200 response to say the name was good
  // but we will also throw in the json of the new name just for convenience
  return res.json({ name });
};

// function to handle a request to any non-real resources (404)
// controller functions in Express receive the full HTTP request
// and get a pre-filled out response object to send
const notFound = (req, res) => {
  res.status(404).sendFile(path.resolve(`${__dirname}/../../views/notFound.html`));
};

// export the relevant public controller functions
module.exports = {
  index: hostIndex,
  page1: hostPage1,
  page2: hostPage2,
  getName,
  setName,
  notFound,
};
