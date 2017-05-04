// Set up
var express  = require('express');
var app      = express();                               // create our app w/ express
var mongoose = require('mongoose');                     // mongoose for mongodb
var morgan = require('morgan');             // log requests to the console (express4)
var bodyParser = require('body-parser');    // pull information from HTML POST (express4)
var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)
var cors = require('cors');
 
// Configuration
//mongoose.connect('mongodb://localhost/hyrax');
const uristring =
    process.env.MONGOLAB_URI ||
    process.env.MONGOHQ_URL ||
    'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
//mongoose.connect('mongodb://localhost/hyrax');
mongoose.connect(uristring, function (err, res) {
    if (err) {
      console.log ('ERROR connecting to: ' + uristring + '. ' + err);
    } else {
      console.log ('Succeeded connected to: ' + uristring);
    }
});
 
app.use(morgan('dev'));                                         // log every request to the console
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(methodOverride());
app.use(cors());

app.set('port', process.env.PORT || 8080);
 
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
   // res.header("Access-Control-Allow-Origin", req.headers.origin || 
   //  "http://localhost:8100");
   // res.header('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,DELETE,PUT');
   // res.header("Access-Control-Allow-Credentials", 'true' );
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   
   // res.header('Access-Control-Allow-Methods', '*');
   // res.header("Access-Control-Allow-Headers", "*");
   next();
});

var db = mongoose.conection;

// Models

var Project = mongoose.model('Project', {
    address: String,
    description: String,
    phone: Number,
    energyrate: Number
});
 
// Routes
 
    // Get reviews
    app.get('/api/projects', function(req, res) {
 
        console.log("fetching projects");
 
        // use mongoose to get all projects in the database
        Project.find(function(err, projects) {
 
            // if there is an error retrieving, send the error. nothing after res.send(err) will execute
            if (err)
                res.send(err)
 
            res.json(projects); // return all projects in JSON format
        });
    });
 


    // create a project
    app.post('/api/projects', function(req, res) {
        console.log('creating project');

        Project.create({
            address: req.body.address,
            description: req.body.description,
            phone: req.body.phone,
            energyrate: req.body.energyrate,
            done: false
        }, function(err, project) {
            if (err)
                res.send(err);
 
            // get and return all the projects after you create another
            // will send multiple same posts if you dont
            Project.find(function(err, projects) {
                if (err)
                    res.send(err)
                res.json(projects);
            });
        });
    });
        
    //     let newProject = new Project({
    //         address: req.body.address,
    //         description: req.body.description,
    //         phone: req.body.phone,
    //         energyrate: req.body.energyrate + 1
    //     });

    //     console.log("creating project");
    //     console.log(req.body.address);
    //     console.log(req.body.description);
    //     console.log(req.body.phone);
    //     console.log(req.body.energyrate);
 
    //     // create a project, information comes from request from Ionic
    //     newProject.save(function(err, newProject) {
    //         if (err) return console.error(err);
    //         console.log('project created!');
    //     }); 
    // });
 


    // delete a review
    app.delete('/api/projects/:project_id', function(req, res) {
        Review.remove({
            _id : req.params.project_id
        }, function(err, project) {
 
        });
    });
 
 
// listen (start app with node server.js) ======================================
app.listen(app.get('port'), function () {
    console.log("App listening on port", app.get('port'));
});