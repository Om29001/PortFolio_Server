const express = require("express")
const app = express()
const dotenv = require("dotenv")

require("./db/conn")
const projectdata = require("./model/projectschema")
const PORT = process.env.PORT || 8080
app.use(express.json())

app.use(require("./router/auth"))

app.listen(PORT, () => {
  console.log("running " + PORT)
})
