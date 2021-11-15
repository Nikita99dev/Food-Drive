const express = require('express');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const cors = require('cors')

// Импортируем созданный в отдельный файлах рутеры.
// const indexRouter = require('./routes/index');
// const postsRouter = require('./routes/posts');
const usersRouter = require('./routes/userRouter')
const mapRouter = require('./routes/mapRouter')
const moneyRouter = require('./routes/moneyRouter')

const app = express();
const PORT = 3001;

app.use(logger('dev'));
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors( {origin: true, credentials: true }));
// { origin: true, credentials: true }
app.use(cookieParser());
app.use(
  session({
    secret: '8u54trgh9but349rgjoi53eigrpj4wegrjpo', 
    resave: false,
    saveUninitialized: false,
    name: 'cookie',
    cookie: {
      maxAge: 1000 * 300,
      secure: false,
    },
    store: new FileStore({}),
  }),
);

// app.use('/', indexRouter);
app.use('/money', moneyRouter);
app.use('/users', usersRouter);
app.use('/map', mapRouter)


app.listen(PORT, () => {
  console.log(`server started PORT: ${PORT}`);
});
