const express = require("express");
require("../src/db/connection");
const MansRanking = require("../src/models/mens");
const router = require("../src/router/routes");
const app = express();
const port = process.env.PORT || 3080;

app.use(express.json());

app.use(router);

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
