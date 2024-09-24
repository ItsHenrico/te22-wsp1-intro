import express from "express"

const router = express.Router()

router.get("/test", (req, res) => {
    res.send("Hello World")
});

router.get("/", (req, res) => {
    console.log(req.query)
    const name = req.query.name
    console.log(name)
    res.render("index.njk", {
        message: `Hello ${name}!`,
        title: `Hem`,
        github: `https://www.github.com/itshenrico`,
    })
})

router.get("/watch", (req, res) => {
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
        },
        "Deadpool": {
            title: `Deadpool 2`,
            year: 2018,
            ID: "Ypwd5gsnImE",
        }
    }

    const movie = movies[movieID]
    console.log(movie)

    res.render("watch.njk", {
        title: `Watch`,
        movie: movie,
    })
    //res.json(movie)
})

router.get("/ytub", (req, res) => {
    const ID = req.query.v
    console.log(ID)
    res.render("ytub.njk", {
        title: "YouTube",
        ID: ID,
    })
})

router.get("/about", (req, res) => {
    res.render("about.njk", {
        message: `About`,
        title: `About`,
    })
})

export default router