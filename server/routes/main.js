const express = require('express');
const path = require('path');
const router = express.Router();


router.get("/", (req, res) => {  // router به جای app شد
    res.sendFile(path.join(__dirname, '../../views/main.html'));   //../../views/layouts/main.html
});

router.get("/home", (req, res) => {  // router به جای app شد
    res.sendFile(path.join(__dirname, '../../views/home.html'));   //../../views/layouts/main.html
});

module.exports = router;