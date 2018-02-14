import * as express      from  'express';
import * as cookieParser from  'cookie-parser';
import * as bodyParser   from  'body-parser';
import * as morgan       from  'morgan';
import config       from  './config';
import routes       from  './server/routes';

const app = express();


// Middleware
app.use ( bodyParser.json());
app.use ( cookieParser());
app.use ( morgan( 'dev' ));


// Routes
routes( app );


// Error handling middleware
app.use (( err: any, req: any, res: any, next: any ) => {
  console.log( err );

  res.status( err.status || 422 )
    .send({ error: err.message });

  return next( err );
});


// Start App
app.listen( config.PORT, () =>
  console.log( `App listening on port ${config.PORT}, Happy hunting` ));
