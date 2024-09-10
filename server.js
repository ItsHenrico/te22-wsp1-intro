import express from "express"
import nunjucks from "nunjucks"

const app = express()

nunjucks.configure("views", {
    autoescape: true,
    express: app,
})

app.use(express.static("public"))

app.get("/", (req, res) => {
    res.render("index.njk", {
        message: "Hello World!",
        title: "Hem",
        url: "https://www.github.com/itshenrico",
    })
})

app.get("/about", (req, res) => {
    res.render("about.njk", {
        message: "About",
        title: "About",
    })
})

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000')
})