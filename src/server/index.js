const express = require("express");
const { emails, getEmails } = require("./mock-gen");
const app = express();
const port = 4000;

app.get("/emails", (req, res) => res.json(emails));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
