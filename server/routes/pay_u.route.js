import express from "express";
const router = express.Router();

router.get("/checkout", (req, res) => {
  console.log(req.body);
  res.status(200).send("<h1>This is chckout page</h1>");
});

export default router;
