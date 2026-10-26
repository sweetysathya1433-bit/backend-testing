
const express = require("express");
const app = express();

app.get("/marks/:mark", (req, res) => {
  const mark = Number(req.params.mark);

  if (mark < 0 || mark > 100) {
    return res.status(400).json({ message: "Invalid marks" });
  }

  res.json({ message: "Valid marks", mark });
});

module.exports = app;
