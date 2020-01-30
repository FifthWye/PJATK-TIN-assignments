const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Working");
    res.end();
  }

  if (req.url.startsWith("/add")) {
    const queryObject = url.parse(req.url, true).query;
    const num1 = parseInt(queryObject.num1);
    const num2 = parseInt(queryObject.num2);

    if (num1 && num2) {
      var result = String(num1 + num2);
      res.write(result);
      res.end();
    } else {
      res.write("Wrong params");
      res.end();
    }
  }

  if (req.url.startsWith("/mul")) {
    var queryObject = url.parse(req.url, true).query;
    const num1 = parseInt(queryObject.num1);
    const num2 = parseInt(queryObject.num2);

    if (num1 && num2) {
      var result = String(num1 * num2);
      res.write(result);
      res.end();
    } else {
      res.write("Wrong params");
      res.end();
    }
  }

  if (req.url.startsWith("/div")) {
    var queryObject = url.parse(req.url, true).query;
    const num1 = parseInt(queryObject.num1);
    const num2 = parseInt(queryObject.num2);

    if (num1 && num2) {
      var result = String(num1 / num2);
      res.write(result);
      res.end();
    } else {
      res.write("Wrong params");
      res.end();
    }
  }
  if (req.url.startsWith("/sub")) {
    var queryObject = url.parse(req.url, true).query;
    const num1 = parseInt(queryObject.num1);
    const num2 = parseInt(queryObject.num2);

    if (num1 && num2) {
      var result = String(num1 - num2);
      res.write(result);
      res.end();
    } else {
      res.write("Wrong values");
      res.end();
    }
  }
});

server.listen(3000);

console.log("Listening on port 3000...");
