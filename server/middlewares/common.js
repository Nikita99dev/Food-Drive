const sessionLoger = (req, res, next) => {
  console.log(req.session);
  next();
};

const sessionChecker = (req, res, next) => { // проверяем есть ли сессия (ключ емеил в req.session, стр 21, 29, 48 в usersRouter.js)
  if (req.session.uid) {
    next();
  } else {
    res.redirect('/users/signin');
  }
};

module.exports = {sessionChecker, sessionLoger}
