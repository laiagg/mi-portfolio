const express = require("express");
const cors = require("cors");
const portfolioRoutes = require("./routes/portfolio");

const app = express();
app.use(cors());
app.use("/api", portfolioRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
