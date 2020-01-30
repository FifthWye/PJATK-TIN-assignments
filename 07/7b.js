const fs = require("fs");

function watchPath(path) {
  var readFile = fs.readdirSync(path);
  
  console.log("Files in defined path: \n" + readFile);

  fs.watch(path, "utf8", function(event, trigger) {
    console.log(event + " in " + trigger);
    file = fs.readdirSync(path);
    console.log("Files in defined path: \n" + readFile);
  });
}

watchPath("./dataToRead");
