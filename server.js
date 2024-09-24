import express from "express"
import nunjucks from "nunjucks"
import morgan from "morgan"
import indexRouter from "./routes/index.js"

const app = express()

nunjucks.configure("views", {
    autoescape: true,
    express: app,
})

app.use("/", indexRouter)
app.use(express.static("public"))
app.use(morgan("dev"))

app.use((req, res) => {
   // res.status(404).send("404 - Not Found")
   res.status(404).render("404.njk", {
    title: "404 - Not Found"
   })
})

app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000")
})