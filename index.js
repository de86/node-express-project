const express      = require ( 'express' );
const cookieParser = require ( 'cookie-parser' );
const bodyParser   = require ( 'body-parser' );
const config       = require ( './config' );

const app = express();

// Middleware
app.use ( bodyParser.json());
app.use ( cookieParser());


// Routes
app.get ( '/', ( req, res ) => 
  res.send ( 'Hello World' ));


// Start App
app.listen( config.PORT, () =>
  console.log( `App listening on port ${config.PORT}, Happy hunting` ));

