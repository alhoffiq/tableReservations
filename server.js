const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const tables = [
 {
    name: "Bob",
    phoneNumber: "555-555-5555",
    email: "bob@gmail.com",
    id: "1"
 }
];

// Routes
// =============================================================
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/view", function(req, res) {
  res.sendFile(path.join(__dirname, "view.html"));
});

app.get("/form", function(req, res) {
    res.sendFile(path.join(__dirname, "form.html"));
  });

app.get("/api/tables", function(req, res) {
  return res.json(tables);
});

app.post("/api/tables", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  var newTable = req.body;

  console.log(newTable);

  tables.push(newTable);

  res.json(newTable);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT, http://localhost:" + PORT);
});
