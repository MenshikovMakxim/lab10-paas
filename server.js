const express = require(express);
const app = express();
const PORT = process.env.PORT  3000;

const visits = {};

app.get(, (req, res) = {
  res.json({
    message process.env.WELCOME_MSG  Hello from PaaS!,
    environment process.env.NODE_ENV  development,
    version process.env.APP_VERSION  1.0.0,
    hostname require(os).hostname(),
    timestamp new Date().toISOString(),
  });
});

app.get(health, (req, res) =
  res.json({ status ok, uptime process.uptime() }),
);

app.listen(PORT, () =
  console.log(`Running on port ${PORT} in ${process.env.NODE_ENV} mode`),
);

app.get("/about", (req, res) => {
  res.json({
    name: "Lab 10 — PaaS Deployment",
    student: process.env.STUDENT_NAME || "Unknown",
    platform: "Railway / Render",
  });
});