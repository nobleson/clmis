var express = require('express');
var   app     = express();
var request = require('request');
const fs = require("fs");
var    bodyParser = require('body-parser');
var    mongoose   = require('mongoose');
var    os = require('os');
var    hostname = os.hostname();
var path = require('path'); 
//app.set('views',__dirname +'/public');
//app.engine('html', require('ejs').renderFile);
var router = express.Router();
var path = __dirname + '/public/';


//var file  = request('https://cslmis.s3-us-west-2.amazonaws.com/cslmis-admin-firebase-adminsdk-aj55d-e419e36c52.json').pipe(fs.createWriteStream('cslmis-admin-firebase-adminsdk-aj55d-e419e36c52.json'))
    //var cors = require('cors');
app.use("/",router);
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(bodyParser.json());
app.use(function(req, res, next) { 
res.header("Access-Control-Allow-Methods", "POST,GET,PUT,DELETE,OPTIONS"); 
res.header("Access-Control-Allow-Origin", "*"); 
res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"); 
next();
 });


var port = process.env.PORT || 8081;
var remoteURI = "mongodb://heroku_pdt528c8:l0091jjgd2gnh7fojo3dlqi9vl@ds151556-a0.mlab.com:51556,ds151556-a1.mlab.com:51556/heroku_pdt528c8?replicaSet=rs-ds151556";
var localURI = "mongodb://localhost:27017/samplledb";
var mongoURL = remoteURI || localURI;

mongoose.Promise = global.Promise;

// Connecting to the database
/* mongoose.connect(mongoURL, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});
 */
//All artisan routers
var indexRouter = require('./routes');
var companyRouter = require('./routes/company/Company');
var centerRouter = require('./routes/center/Center');
var assesorRouter = require('./routes/assesor/SkillsAssesor');
var apprenticeshipCenterRouter = require('./routes/center/ApprentishipCenter');
var artisanRouter = require('./routes/artisan/Artisan');
var traineeRouter = require('./routes/center/Trainee');
var trainerRouter = require('./routes/center/Trainers.js');
var apprenticeRouter = require('./routes/center/Apprentice.js');
//var mailerRouter = require('./rmaileroutes/');
//var artisanRouter = require('./routes/artisan/Artisan');
//app.use(express.static('data',{index:false, extensions:['json']}),jsonRoute);
//app.use('/api/artisan', artisanRouter); 
//app.use('/api/admin/user', userRouter); 
app.use('/public/assets/', express.static(__dirname + '/public/assets/'));
app.use('/public/assets/css/', express.static(__dirname + '/public/assets/css/'));
app.use('/public/assets/css/colors/', express.static(__dirname + '/public/assets/css/colors/'));
app.use('/public/assets/extras/', express.static(__dirname + '/public/assets/extras/'));
app.use('/public/assets/extras/owl/', express.static(__dirname + '/public/assets/extras/owl/'));
app.use('/public/assets/fonts/', express.static(__dirname + '/public/assets/fonts/'));
app.use('/public/assets/fonts/font-awesome/', express.static(__dirname + '/public/assets/fonts/font-awesome/'));
app.use('/public/assets/fonts/line-icons/', express.static(__dirname + '/public/assets/fonts/line-icons/'));
app.use('/public/assets/fonts/webfonts/', express.static(__dirname + '/public/assets/fonts/webfonts/'));
app.use('/public/assets/img/', express.static(__dirname + '/public/assets/img/'));
app.use('/public/assets/img/about/', express.static(__dirname + '/public/assets/img/about/'));
app.use('/public/assets/img/art/', express.static(__dirname + '/public/assets/img/art/'));
app.use('/public/assets/img/asso/', express.static(__dirname + '/public/assets/img/asso/'));
app.use('/public/assets/img/backgrounds/', express.static(__dirname + '/public/assets/img/backgrounds/'));
app.use('/public/assets/img/blog/', express.static(__dirname + '/public/assets/img/blog/'));
app.use('/public/assets/img/clients/', express.static(__dirname + '/public/assets/img/clients/'));
app.use('/public/assets/img/features/', express.static(__dirname + '/public/assets/img/features/'));
app.use('/public/assets/img/flicker/', express.static(__dirname + '/public/assets/img/flicker/'));
app.use('/public/assets/img/portfolio/', express.static(__dirname + '/public/assets/img/portfolio/'));
app.use('/public/assets/img/shortcode/accordion/', express.static(__dirname + '/public/assets/img/shortcode/accordion/'));
app.use('/public/assets/img/shortcode/resource/', express.static(__dirname + '/public/assets/img/shortcode/resource/'));
app.use('/public/assets/img/shortcode/tab/', express.static(__dirname + '/public/assets/img/shortcode/tab/'));
app.use('/public/assets/img/shortcode/testimonial/', express.static(__dirname + '/public/assets/img/testimonial/'));
app.use('/public/assets/img/shortcode/tab/', express.static(__dirname + '/public/assets/img/shortcode/tab/'));
app.use('/public/assets/img/team/', express.static(__dirname + '/public/assets/img/team/'));
app.use('/public/assets/img/slider/', express.static(__dirname + '/public/assets/img/slider/'));
app.use('/public/assets/js/', express.static(__dirname + '/public/assets/js/'));
app.use('/api/company', companyRouter); 
app.use('/api/trainingprovider', centerRouter); 
app.use('/api/apprcenter', apprenticeshipCenterRouter); 
app.use('/api/center/trainee', traineeRouter);
app.use('/api/center/trainer', trainerRouter);
app.use('/api/assesor', assesorRouter); 
app.use('/api/artisan', artisanRouter); 
app.use('/api/center/apprentice', apprenticeRouter);


router.get("/",function(req,res){
  res.sendFile(path + "header.html");
});
router.get("/career/nsq-programmes",function(req,res){
  res.sendFile(path + "nsq-programmes.html");
});
router.get("/career/learning-suppliers",function(req,res){
  res.sendFile(path + "learning-suppliers.html");
});
router.get("/career/training-providers",function(req,res){
  res.sendFile(path + "training-providers.html");
});
router.get("/career/apprentiship-centers",function(req,res){
  res.sendFile(path + "apprentiship-centers.html");
});
router.get("/sector/institutions",function(req,res){
  res.sendFile(path + "institutions.html");
});
router.get("/sector/regulatory-bodies",function(req,res){
  res.sendFile(path + "regulatory-bodies.html");
});
router.get("/artisans",function(req,res){
  res.sendFile(path + "artisans.html");
});
router.get("/assessors",function(req,res){
  res.sendFile(path + "assessors.html");
});
router.get("/contractors",function(req,res){
  res.sendFile(path + "contractors.html");
});
router.get("/jobs",function(req,res){
  res.sendFile(path + "jobs.html");
});
router.get("/publication/journals",function(req,res){
  res.sendFile(path + "journals.html");
});
router.get("/login",function(req,res){
  res.sendFile(path + "login.html");
});
router.get("/publication/news",function(req,res){
  res.sendFile(path + "news.html");
});
router.get("/programs",function(req,res){
  res.sendFile(path + "programs.html");
});
router.get("/statistics",function(req,res){
  res.sendFile(path + "statistics.html");
});
router.get("/trade",function(req,res){
  res.sendFile(path + "trade.html");
});
router.get("/training-providers",function(req,res){
  res.sendFile(path + "training-providers.html");
});
router.get("/apprentiship-centers",function(req,res){
  res.sendFile(path + "apprentiship-centers.html");
});
router.get("/about",function(req,res){
  res.sendFile(path + "about.html");
});

app.listen(port,() => {
    console.log(`Server running at port `+port);
    });

console.log('nodejs server running on '+ port);

module.exports = app;
