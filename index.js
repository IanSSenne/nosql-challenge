// a basic express server
const express = require("express");
const app = express();
const port = 3000;

app.use("/api", require("./routes/api"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(port, () => console.log(`server is listening on port ${port}`));
