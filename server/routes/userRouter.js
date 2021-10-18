const express = require('express');
// const { sessionChecker, sessionLoger, layoutchanger } = require('../middleware/commonmiddleware');
const { User } =  require('../db/models')
const router = express.Router();
const { sessionChecker, sessionLoger } = require('../middlewares/common');
// const { User, Post } = require('../db/models');

// router.use(sessionLoger);
// router.use(layoutchanger);
router.use(sessionLoger)
/* GET users listing. */
router.get('/signup', async (req, res) => {
  res.json(1)
});

router.post('/signup', async (req, res) => {
  console.log('BACK', req.body);
  const { name, password, address, email } = req.body;
  try{
    const user = await User.create({name, password, address, email})
    res.json(user.email)
  }
  catch(e){
    res.json(e)
  }

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

// router.post('/login', async (req, res)=> {
//   console.log(req.body)
//   res.json(req.body)
// })
// router.get('/signin', (req, res) => {
//   res.render('user/signin');
// });

router.post('/signin', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ where: { email, password} });
    console.log(Boolean(user))
    if(user){
      req.session.user = user.name;
      req.session.uid = user.id;
      return res.json({userId: user.id, username: user.name})
    } else {
      return res.json(user)
    }
  } catch (err) {
    if(err) res.json(err)
  }
});

router.post('/logout',sessionChecker, (req, res) => {
  req.session.destroy();
  // res.cookie('cookie', {});
  res.clearCookie('cookie');
  res.sendStatus(200)
});


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


router.get('/me', sessionChecker, (req, res)=>{
  req.session.user?res.json({userId: req.session.uid, username: req.session.user}):res.json({})
})

module.exports = router;