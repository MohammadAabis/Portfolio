const express = require("express");
const app = express();
var cors = require("cors");
require("dotenv").config();

const port = 7000;

var bodyParser = require("body-parser");
app.use(bodyParser.json({ limit: "50000mb" }));
app.use(
  bodyParser.urlencoded({
    limit: "50000mb",
    extended: true,
    parameterLimit: 50000,
  })
);
app.use(
  express.urlencoded({
    limit: "50000mb",
    extended: true,
    parameterLimit: 50000,
  })
);
app.use(express.json());

app.use(express.text());

var whitelist = [
  "http://localhost:3001",
  "http://localhost",
  "http://localhost:3000",
  ,
]; //white list consumers

var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(null, false);
    }
  },
  credentials: true, //Credentials are cookies, authorization headers or TLS client certificates.
};

//adding cors middleware to the express with above configurations
app.use(cors(corsOptions));

app.get("/", (request, response) => {
  console.log("i am here api");
  response.json("Server is running on port 7000");
});

// Endpoint for contact form submission
app.post("/contact", async (req, resp) => {
  let finalRequest = {};
  try {
    // Parse the request body
    const parsedBody = JSON.parse(req.body);

    // Prepare form data
    const formData = new FormData();
    formData.append("access_key", process.env.MY_EMAIL_KEY);
    formData.append("name", parsedBody.name);
    formData.append("email", parsedBody.email);
    formData.append("subject", parsedBody.subject);
    formData.append("message", parsedBody.message);

    // Make the POST request to Web3Forms API
    const result = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    // Parse the API response
    const result1 = await result.json();

    // Handle success and failure
    if (result1.success) {
      finalRequest = resp.json({
        status: 200,
        message: "Form submitted successfully",
        data: result1,
      });
    } else {
      finalRequest = resp.json({
        status: 400,
        message: "Form submission failed",
        error: result1,
      });
    }
  } catch (error) {
    finalRequest = resp.json({
      status: 500,
      message: "Internal Server Error",
      error: error.message,
    });
  }
  return finalRequest;
});

app.listen(port, async (req, res) => {
  console.log(`App running on port ${port}.`);
});
