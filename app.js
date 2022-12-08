var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

var app = express();

const fmt = require('./utils/dateFormatting');
app.use((req, res, next) => {
    res.locals.fmt = fmt;
    next();
});



var indexRouter = require('./routes/index');
const authApiRouter = require('./routes/api/AuthApiRoute')
const caretakerRouter = require('./routes/caretakerRoute');
const careRouter = require('./routes/careRoute');
const catRouter = require('./routes/catRoute');
const catApiRouter = require('./routes/api/CatApiRoute');
const caretakerApiRouter = require('./routes/api/CaretakerApiRoute');
const careApiRouter = require('./routes/api/CareApiRoute');

const treatmentApiRouter = require('./routes/api/TreatmentApiRoute');
const specializationApiRouter = require('./routes/api/SpecializationApiRoute');

const sequelizeInit = require('./config/sequelize/init');



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());


const session = require('express-session');
const authUtils = require("./utils/authUtils");
app.use(session({
    secret: 'secret_password',
    resave: false
}));
app.use((req, res, next) => {
    const loggedUser = req.session.loggedUser;
    res.locals.loggedUser = loggedUser;
    if (!res.locals.loginError) {
        res.locals.loginError = undefined;
    }
    next();
});

app.use('/', indexRouter);
app.use('/api/auth', authApiRouter)
app.use('/caretakers', authUtils.permitAuthenticatedUser, caretakerRouter);
app.use('/cats', catRouter);
app.use('/cares', careRouter);
sequelizeInit()
    .catch(err => {
        console.log(err);
    });
app.use('/api/cats', catApiRouter);
app.use('/api/caretakers', caretakerApiRouter);
app.use('/api/cares', careApiRouter);

app.use('/api/treatments', treatmentApiRouter);
app.use('/api/specializations', specializationApiRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
