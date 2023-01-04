const express = require("express")

const router = express.Router()
require("../db/conn")

const project = require("../model/projectschema")
const contact = require("../model/contactschema")
const certificate = require("../model/certificateschema")
function middleware(req, res, next) {
  next()
}

router.get("/", (req, res) => {
  res.send("hello ")
  console.log("hello")
})

router.post("/user", async (req, res) => {
  const { language, title, about, link } = req.body
  if (!language || !title || !about || !link) {
    return res.status(422).json({ error: "plz fill data" })
  }
  try {
    const projectExist = await project.findOne({ title: title })

    if (projectExist) {
      return res.status(422).json({ error: "Project already exists " + projectExist._id })
    }

    const project1 = new project({ language, title, about, link })

    const projectsave = await project1.save()
    res.status(201).json({ message: "Project saved successfully" })
  } catch (e) {
    console.log(e)
  }
})

router.post("/cuser", async (req, res) => {
  const { title, about, link } = req.body
  if (!title || !about || !link) {
    return res.status(422).json({ error: "plz fill data" })
  }
  try {
    const certificateExist = await certificate.findOne({ title: title })

    if (certificateExist) {
      return res.status(422).json({ error: "Project already exists " + certificateExist._id })
    }

    const certificate1 = new certificate({ title, about, link })

    const certificatesave = await certificate1.save()
    res.status(201).json({ message: "Certificate saved successfully" })
  } catch (e) {
    console.log(e)
  }
})

router.post("/contact", async (req, res) => {
  const { name, mail, message } = req.body
  if (!name || !mail || !message) {
    return res.status(422).json({ error: "plz fill data" })
  }

  try {
    const contact1 = new contact({ name, mail, message })
    console.log(contact1)
    const contactsave = await contact1.save()
    res.status(201).json({ message: "Project saved successfully" })
  } catch (e) {
    console.log("hi" + e)
  }
})

router.get("/portfolio", async (req, res) => {
  try {
    const projectdata = await project.find()
    const certificatedata = await certificate.find()
    // console.log("ggg",projectdata,certificatedata);
    res.send([projectdata, certificatedata])
  } catch (e) {
    console.log(e)
  }
})

router.get("/admin/view", async (req, res) => {
  try {
    const condata = await contact.find()
    res.send(condata)
  } catch (e) {
    console.log(e)
  }
})

router.post("/admin/project", async (req, res) => {
  const { language, title, about, link } = req.body
  if (!language || !title || !about || !link) {
    return res.status(422).json({ error: "plz fill data" })
  }
  try {
    const project1 = new project({ language, title, about, link })
    console.log(project1)
    const contactsave = await project1.save()
    res.status(201).json({ message: "Project saved successfully" })
  } catch (e) {
    console.log("hi" + e)
  }
})

router.post("/admin", async (req, res) => {
  console.log(req.body)
  const { title, about, link } = req.body
  if (!link) {
    return res.status(422).json({ error: "plz fill data" })
  }
  try {
    const certificate1 = new certificate({ title, about, link })
    console.log(certificate1)
    const contactsave = await certificate1.save()
    res.status(201).json({ message: "Certificate saved successfully" })
  } catch (e) {
    console.log("hi" + e)
  }
})

module.exports = router
