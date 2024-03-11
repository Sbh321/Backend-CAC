require("dotenv").config(); // importing environment variables file
const express = require("express"); //importing express.js module to the script by asigning it to express variable
const app = express(); //creating an instance of the express application and assigned it to app variable
const port = 3000; // port you want to listen on

fetch("https://api.github.com/users/Sbh321")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    app.get("/github", (req, res) => {
      res.send(data);
    });
  })
  .catch(() => {
    console.log("something went wrong");
  });

//Here we are initiating  get request in app which takes two parameters the first is the page where we are sending the response in this case it is the root route and second parameter is a callback
// When a GET request to the page is made to the call back function is executed.
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/page", (req, res) => {
  res.send("This is another page");
});

app.get("/login", (req, res) => {
  res.send("<h1>Login Page</h1>");
});

// This line starts the Express.js server and makes it listen on the specified port When the server starts listening, the callback function is executed
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
