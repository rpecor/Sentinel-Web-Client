const express = require('express');
const app = express();
const path = require('path');
const logger = require('morgan');
const env          = process.env;
const connectMongo = require('./config/connect-mongoose');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');
const RedisStore = require('connect-redis')(session);
const passport = require('passport');
const accountRouter = require('./server/routes/account');
const mainRouter = require('./server/routes/main');
const projectRouter = require('./server/routes/project');


require('./config/passport');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(logger('dev'));
app.use('/resources', express.static('resources'));
app.use('/client', express.static('client'));
app.set('view engine', 'ejs');

app.use(session({
    store: new RedisStore({
        url: 'redis://localhost:6379'
    }),
    secret: 'MY_SECRET',
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
  res.locals.user = req.user;
  next();
});

app.use('/account', accountRouter);
app.use('/', mainRouter);
app.use('/project', projectRouter);


app.listen(env.NODE_PORT || 3000, env.NODE_IP || 'localhost', function () {
  console.log(`Application worker ${process.pid} started...`);
});

