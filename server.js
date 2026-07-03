import e from "express";

const app = e();

app.get("/", (req, res) => {
  return res.json({
    success: true,
    message: "hello wolrd",
  });
});

app.listen(5000, () => {
  console.log("App is live...");
});
