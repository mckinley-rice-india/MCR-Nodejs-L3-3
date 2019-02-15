import express from 'express';
import mongoose, { createConnection } from 'mongoose';
import bodyParser from 'body-parser';
import routes from './src/routes/planetRoutes';
import { isNullOrUndefined } from 'util';

const app = express();
const PORT = 3000;

// mongoose connection
mongoose.Promise = global.Promise;
var dbmlabUrl = 'mongodb://appchto:Password!1@ds237574.mlab.com:37574/node'
// var dbmlabUrl = 'mongodb://nodeUser:nodePassword!1@cluster0-shard-00-02-yoh15.azure.mongodb.net:27017/node'
//   var dbmlabUrl = 'mongodb://localhost:27017/node';

mongoose.connect(dbmlabUrl
    , {useMongoClient: true}
    );
var connection = mongoose.connection;

connection.on("open", function (err) {
    if (err) {
        console.log("Error on connectiong " + err); // it will print your collection data
    }
    console.log("mongodb is connected!!");
});

// bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
  

var swaggerUi = require('swagger-ui-express'),
swaggerDocument = require('./swagger/swagger.json');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

//implement router
routes(app);

// serving static files
app.use(express.static('public'));

app.get('/', (req, res) =>
    res.send(`Node and express server is running on port ${PORT}`)
);

app.listen(PORT, () =>
    console.log(`your server is running on port ${PORT}`)
);