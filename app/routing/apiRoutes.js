const express = require("express");
const router = express.Router();
const employeeList = require("../data/employees.js");

router.get("/api/employees", function (req, res) {
    res.json(employeeList);
});

router.post("/api/employees", function (req, res) {
    // res.json(req.body);
    // employeeList.push(req.body)
    console.log("Hi 1");
    for (i = 0; i < req.body.scores.length; i++) {
        req.body.scores[i] = parseInt(req.body.scores[i])
    }
    let totalDifferences = [];
    let similarEmployee = [];
    for (i = 0; i < employeeList.length; i++) {
        totalDifferences[i] = 0;
        for (j = 0; j < req.body.scores.length; j++) {
            totalDifferences[i] += Math.abs(req.body.scores[j] - employeeList[i].scores[j])
        }
        if (i=0||totalDifferences[i]<similarEmployee[1]){
            similarEmployee[0] = i;
            similarEmployee[1] = totalDifferences[i]
        }
    }
    console.log("Hi 2");
    console.log(employeeList[similarEmployee[0]]);
    res.json("Hello")
});

module.exports = router;