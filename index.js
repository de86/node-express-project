const express      = require ( 'express' );
const cookieParser = require ( 'cookie-parser' );
const bodyParser   = require ( 'body-parser' );
const morgan       = require ( 'morgan' );
const config       = require ( './config' );
const routes       = require ( './routes' );

const app = express();


// Middleware
app.use ( bodyParser.json());
app.use ( cookieParser());
app.use ( morgan( 'dev' ));


// Routes
routes( app );


// Error handling middleware
app.use (( err, req, res, next ) => {
  console.log( err );

  res.status( err.status || 422 )
    .send({ error: err.message });

  return next( err );
});


// Start App
app.listen( config.PORT, () =>
  console.log( `App listening on port ${config.PORT}, Happy hunting` ));
