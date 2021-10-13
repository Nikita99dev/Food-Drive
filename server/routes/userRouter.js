const express = require('express');
// const { sessionChecker, sessionLoger, layoutchanger } = require('../middleware/commonmiddleware');

const router = express.Router();
// const { User, Post } = require('../db/models');

// router.use(sessionLoger);
// router.use(layoutchanger);

/* GET users listing. */
router.get('/signup', async (req, res) => {
  res.json(1)
});

router.post('/signup', async (req, res) => {
  console.log('BACK', req.body);
  const { name, password, address, email } = req.body;
  console.log(name, password, address, email )
  console.log(name, password, email, address);
  res.json(name)

  // try {
  //   const user = await User.findOne({ where: { name } });
  //   console.log('------------', user);
  //   if (user) {
  //     return res.render('user/signup', {
  //       name, password, email, error: 'User already exist',
  //     });
  //   }
  //   await User.create({ name, password, email });
  //   return res.redirect('/users/signin');
  // } catch (error) {
  //   return res.render('error', {
  //     message: 'Не удалось получить записи из базы данных.',
  //     error: { error },
  //   });
  // }
});

// router.get('/signin', (req, res) => {
//   res.render('user/signin');
// });

// router.post('/signin', async (req, res) => {
//   const { email, password } = req.body;
//   try {
//     const user = await User.findOne({ where: { email, password } });
//     console.log(user);
//     if (user) {
//       req.session.user = user.name;
//       req.session.uid = user.id;
//       return res.redirect(`/users/profile/${user.id}`);
//     }
//   } catch {
//     return res.render('error', {
//       message: 'Не удалось получить записи из базы данных.',
//       error: {},
//     });
//   }
//   return res.render('user/signin', { erra: 'User or password doesnot exists !!!' });
// });

// router.get('/logout', (req, res) => {
//   req.session.destroy();
//   // res.cookie('cookie', {});
//   res.clearCookie('cookie', { path: '/' });
//   res.redirect('/');
// });

// router.get('/profile/:id', async (req, res) => {
//   const { id } = req.params;
//   console.log(id, req.session.uid);
//   if (req.session.uid === Number(id)) {
//     try {
//       const user = await User.findByPk(Number(req.session.uid));
//       const posts = await Post.findAll({ where: { userid: req.session.uid } });
//       console.log('->>>>>>>>>>>>>>>>>>>>>>>>',user.name);
//       return res.render('user/profile', { user, posts });
//     } catch (error) {
//       return res.render('error', {
//         message: 'Не удалось получить записи из базы данных.',
//         error: { error },
//       });
//     }
//   }
//   return res.redirect(`/users/${req.session.uid}`);
// });

module.exports = router;
