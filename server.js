// Minimal Express app for ZipLoom's VPS deploy test (artifact_mode: app).
//
// Deliberately boring: if a deploy of this fails, the fault is in the deploy
// path, not in the application. Keep it that way.
const express = require("express");

const app = express();
const port = process.env.PORT || 3000;
const STARTED_AT = new Date().toISOString();

app.get("/", (_req, res) => {
  res.status(200).send("ziploom-deploy-canary-app ok\n");
});

// Optional: set this as the project's health path to exercise the smoke test's
// health check. Without it that check is SKIPPED, not failed.
app.get("/healthz", (_req, res) => {
  res.status(200).json({ status: "ok", startedAt: STARTED_AT });
});

// 0.0.0.0, never 127.0.0.1: the app runs inside Docker and is reached through a
// published host port. Binding to loopback would make the container unreachable
// while the process looked healthy from inside it.
app.listen(port, "0.0.0.0", () => {
  console.log(`ziploom-deploy-canary-app listening on ${port}`);
});
