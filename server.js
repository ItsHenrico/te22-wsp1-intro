import express from "express"
import nunjucks from "nunjucks"

const app = express()

nunjucks.configure("views", {
    autoescape: true,
    express: app,
})

app.use(express.static("public"))

app.get("/", (req, res) => {
    console.log(req.query)
    const name = req.query.name
    console.log(name)
    res.render("index.njk", {
        message: `Hello ${name}!`,
        title: `Hem`,
        github: `https://www.github.com/itshenrico`,
    })
})

app.get("/watch", (req, res) => {
    const movieID = req.query.v
    console.log(movieID)

    const movies = {
        "ID": {
            title: `Cars`,
            year: 2006,
            ID: "pQly7_Cj34U",
        },
        "ID2": {
            title: `Cars 2`,
            year: 2011,
            ID: "zonotSm4Mdc",
        },
        "ID3": {
            title: `Cars 3`,
            year: 2017,
            ID: "2LeOH9AGJQM",
        }
    }

    const movie = movies[movieID]
    console.log(movie)

    res.render("watch.njk", {
        title: `watch`,
        movie: movie,
    })
    //res.json(movie)
})

app.get("/ytub", (req, res) => {
    const ID = req.query.v
    console.log(ID)
    res.render("ytub.njk", {
        title: "YouTube",
        ID: ID,
    })
})

app.get("/about", (req, res) => {
    res.render("about.njk", {
        message: `About`,
        title: `About`,
    })
})

app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000")
})