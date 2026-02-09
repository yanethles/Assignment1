const express = require("express");
const app = express();

// Middleware to read raw text bodies
app.use(express.text({ type: "*/*" }));

app.post("/", (req, res) => {
  res.status(200).send(req.body);
});

// Use Render's assigned port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Echo server running on port ${PORT}`);
});
