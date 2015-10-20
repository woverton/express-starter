var express = require('express');
var exphbs = require('express-handlebars');
var fs = require('fs');
var path = require('path');

var App = function() {
    this.init();
}

App.prototype.init = function() {
    //Create main app
    this.app = express();

    //Create template engine
    var hbs = exphbs.create();

    // Register template engine with the Express app.
    this.app.engine('handlebars', hbs.engine);
    this.app.set('view engine', 'handlebars');

    this.loadRoutes(function(){
    	this.app.listen(8000);
    }.bind(this));

}

App.prototype.loadRoutes = function(callback) {
	// Find all routes
    fs.readdir(path.resolve(__dirname, 'routes'), function(err, files) {
        if (err) throw err;

        //Load routes
        files.forEach(function(file) {
            var route = require(path.resolve(__dirname, 'routes', file));

            var name = file.split(".js")[0];

            if(name == "index") name = "";

            this.app.use("/" + name, route);
        }.bind(this));

        //We're done
        callback();

    }.bind(this));
}

new App();