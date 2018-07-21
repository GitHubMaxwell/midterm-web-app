'use strict';

import express from 'express';
// import morgan from 'morgan';
import cors from 'cors';
// import cookieParser from 'cookie-parser';

// import codeRunnerRouter from './codeRunner/nel/router';
// import router from './api/api.js';
// import authRouter from './auth/auth.js';

// import notFound from './middleware/404.js';
// import noAuth from './middleware/401.js';
// import errorHandler from './middleware/error.js';
// import noBody from './middleware/400.js';

// import quizRouter from './quiz/router.js';

let app = express();

app.use(cors());
// app.use(morgan('dev'));


app.use(express.static('./public'));

app.use(express.json());
app.use(express.urlencoded({extended: true}));
// app.use(cookieParser());
// app.use(codeRunnerRouter);
// app.use(router);

// app.use(quizRouter);
// app.use(authRouter);


// app.use(notFound);
// app.use(noAuth);
// app.use(noBody);
// app.use(errorHandler);

let server = false;

module.exports = {
  start: (port) => {
    if(!server) {
      server = app.listen(port, (err) => {
        if(err) { throw err; }
        console.log('Server running on ' + port);
      });
    } else {
      console.log('Server is already running');
    }
  },
  stop: () => {
    server.close(() => {
      console.log('Server has closed');
    });
  },
  server: app,
};