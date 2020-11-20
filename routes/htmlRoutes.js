var path = require("path");

function createHTMLRoutes(app) {
  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../html/index.html"));
  });

  app.get("/viewtables", (req, res) => {
    res.sendFile(path, join(__dirname, "../html/viewtables.html"));
  });

  app.get("/reserve", (req, res) => {
    res.sendFile(path, join(__dirname, "../html/reserve.html"));
  });

  console.log(app)
  return 'done'
}

module.exports = createRoutes