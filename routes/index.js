var express = require('express');
var router = express.Router();

// define the home page route
router.get('/', function(req, res) {

    res.render("home/index", {
        showTitle: true,
        foo: "Wiffle",
        bar: "Woffle"
    })

});

// define the about route
router.get('/about', function(req, res) {

    res.render("about/index", {
        name: "James",
        thing: "Dragon"
    })

});

// define the about route
router.get('/other', function(req, res) {

    res.render("about/index", {
        showTitle: true
    })

});

module.exports = router;