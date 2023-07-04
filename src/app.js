const express = require("express")
const app = express();

app.use(express.json())
const AuthRoute = require("./routes/auth.js")
app.use("/", AuthRoute);
// app.get("/", (req, res) => {
//     res.send("hello");
// })
// app.post("/", (req, res) => {
//     // res.send("hello");
//     res.send(req.body)
//     console.log(req.body);
// })
app.listen(9000, () => { console.log("server listening at port 9000"); })