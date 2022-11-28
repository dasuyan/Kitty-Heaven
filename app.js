var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
const caretakerRouter = require('./routes/caretakerRoute');
const careRouter = require('./routes/careRoute');
const catRouter = require('./routes/catRoute');
const catApiRouter = require('./routes/api/CatApiRoute');
const caretakerApiRouter = require('./routes/api/CaretakerApiRoute');
const careApiRouter = require('./routes/api/CareApiRoute');

const sequelizeInit = require('./config/sequelize/init');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/caretakers', caretakerRouter);
app.use('/cats', catRouter);
app.use('/cares', careRouter);
sequelizeInit()
    .catch(err => {
        console.log(err);
    });
app.use('/api/cats', catApiRouter);
app.use('/api/caretakers', caretakerApiRouter);
app.use('/api/cares', careApiRouter);

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
