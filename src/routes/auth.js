const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
    res.send("hello");
})
router.post("/", (req, res) => {
    // res.send("hello");
    res.send(req.body)
    console.log(req.body);
})



module.exports = router;