let express = require('express');
let app = express();
let path = require('path');
let bodyParser = require('body-parser');
let db = require('./util/database');
var $ = require( "jquery" );
// let panzoom = require('panzoom');
const expressHbs = require('express-handlebars');
app.engine(
    'hbs',
    expressHbs({
      layoutsDir: 'views/layouts/',
      defaultLayout: 'main-layout',
      extname: 'hbs'
    })
  );
  app.set('view engine', 'hbs');
  app.set('views', 'views');

app.use(express.static(path.join(__dirname,'public')));
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use('/panzoom', express.static(__dirname + '/node_modules/panzoom/dist/'));
let mapRoutes = require('./routes/map-routes');

app.use(mapRoutes);


app.listen(process.env.PORT || 5000)