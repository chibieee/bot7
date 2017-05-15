const express = require("express");
const path = require("path");

const port = process.env.PORT || 3000;
const app = express();

// not necessary, but just to show a static webpage
// and ensure server's working.
app.use(express.static(path.join(__dirname, "../public")));

// start server
app.listen(port, () => console.log(`Listening on ${port}`));
