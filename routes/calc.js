import express from "express"

const router = express.Router()

router.get("/", (req, res) => {
    const number1 = req.query.num1 || ""
    const number2 = req.query.num2 || ""
    let sum
    let product
    let num1 = parseInt(number1)
    let num2 = parseInt(number2)
    const method = req.query.method
    function add() {
        sum = num1 + num2
    }
    function multiply() {
        product = num1 * num2
        console.log(product)
    }

    if (method === "add") {
        add()
    }

    console.log(sum)
    res.render("calc.njk", {
        title: "Calculator",
        sum: sum || product,
        num1: num1,
        num2: num2,
    })
})

export default router