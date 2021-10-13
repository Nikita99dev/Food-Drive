const express = require('express');
const createError = require('http-errors');
const logger = require('morgan');
const path = require('path');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const cors = require('cors')

// Импортируем созданный в отдельный файлах рутеры.
// const indexRouter = require('./routes/index');
// const postsRouter = require('./routes/posts');
const usersRouter = require('./routes/userRouter')

const app = express();
const PORT = 3001;

app.use(logger('dev'));
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({ origin: true, credentials: true }));
// app.use(cookieParser());
// app.use(
//   session({
//     secret: '8u54trgh9but349rgjoi53eigrpj4wegrjpo', 
//     resave: false,
//     saveUninitialized: false,
//     name: 'cookiename',
//     cookie: {
//       maxAge: 1000 * 300,
//       secure: false,
//     },
//     store: new FileStore({}),
//   }),
// );

// app.use('/', indexRouter);
// app.use('/posts', postsRouter);
app.use('/users', usersRouter);

// Если HTTP-запрос дошёл до этой строчки, значит ни один из ранее встречаемых рутов не ответил на запрос. Это значит, что искомого раздела просто нет на сайте. Для таких ситуаций используется код ошибки 404. Создаём небольшое middleware, которое генерирует соответствующую ошибку.
// app.use((req, res, next) => {
//   const error = createError(
//     404,
//     'Запрашиваемой страницы не существует на сервере.',
//   );
//   next(error);
// });

// // Отлавливаем HTTP-запрос с ошибкой и отправляем на него ответ.
// app.use((err, req, res, next) => {
//   // Получаем текущий ражим работы приложения.
//   const appMode = req.app.get('env');
//   // Создаём объект, в котором будет храниться ошибка.
//   let error;

//   // Если мы находимся в режиме разработки, то отправим в ответе настоящую ошибку. В противно случае отправим пустой объект.
//   if (appMode === 'development') {
//     error = err;
//   } else {
//     error = {};
//   }

//   // Записываем информацию об ошибке и сам объект ошибки в специальные переменные, доступные на сервере глобально, но только в рамках одного HTTP-запроса.
//   res.locals.message = err.message;
//   res.locals.error = error;

//   // Задаём в будущем ответе статус ошибки. Берём его из объекта ошибки, если он там есть. В противно случае записываем универсальный стату ошибки на сервере - 500.
//   res.status(err.status || 500);
//   // Формируем HTML-текст из шаблона "error.hbs" и отправляем его на клиент в качестве ответа.
//   res.render('error');
// });

app.listen(PORT, () => {
  console.log(`server started PORT: ${PORT}`);
});
