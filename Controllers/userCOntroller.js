const express = require("express");
const router = express.Router();
const data = require("../Data");

router.get("/", (req, res) => {
    res.send(data);
});

router.get("/male", (req,res) => {

    const maleData = data.filter( (user) => user.gender === "Male");
    res.send(maleData);
});

router.get("/female", (req,res) => {

    const maleData = data.filter( (user) => user.gender === "Female");
    res.send(maleData);
})

module.exports = router;