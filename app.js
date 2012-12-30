var ACS = require('acs').ACS,
    logger = require('acs').logger,
    express = require('express'),
    partials = require('express-partials');

// initialize app
function start(app, express) {
	ACS.init('OAUTH_KEY', 'OAUTH_SECRET_KEY');
  	logger.setLevel('DEBUG');
  	
  	//use connect.session
	app.use(express.cookieParser());
	app.use(express.session({ key: 'node.acs', secret: "my secret" }));
	
	app.use(express.favicon(__dirname + '/public/images/favicon.ico'));		//set favicon

	//set to use express-partial for view
  	app.use(partials());

  	//Request body parsing middleware supporting JSON, urlencoded, and multipart
  	app.use(express.bodyParser());
}

// release resources
function stop() {
	
}