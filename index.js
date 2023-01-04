const express = require("express")
const app = express()
const dotenv = require("dotenv")
const apis = require("./api/auth")


require("./db/conn")
// const projectdata = require("./model/projectschema")
const PORT = process.env.PORT || 8080
app.use(express.json())

app.use("/", apis)
// app.use("/portfolio", apis2)


app.listen(PORT, () => {
  console.log("running " + PORT)
})
