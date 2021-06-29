// THIS FILE IS FOR ROUTING THE ENTIRE SITE

// THE CONTROLLER PART OF IT

const express = require('express');

const router = express.Router();


router.get('/', (req, res) => {
    res.render('index');
})

// NOW WE NEED TO EXPORT THIS FILE
module.exports = router;