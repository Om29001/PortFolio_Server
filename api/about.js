const express = require("express")

const router = express.Router()
require("../db/conn")

router.get("/a", (req, res) => {
  res.send("abpout ")
  console.log("about")
})
