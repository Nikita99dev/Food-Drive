const express = require('express');
// const { sessionChecker, sessionLoger, layoutchanger } = require('../middleware/commonmiddleware');
const { User, Marker } =  require('../db/models')
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
  const { name, password, role, email, money } = req.body;
  
  try{
    const curUser = await User.findOne({where: {email}})
    console.log(curUser)
    if(curUser){
      return res.status(500).json({'ok': false})
    } else {
      money!==""?Number(money):0
      console.log({name, role, password, email, money:money})
      const user = await User.create({name, role, password, email, money:money||0})
      console.log('user idddddddddddddddddddddddddddddddddddddddddddddddddddddd', user.id)
      res.json(user.id)
    }
  }
  catch(e){
    console.log(e)
  }

  router.get('/AllUs', (req, res) => {
    try {
      const Users = User.findAll({where : { role: receiver}})
      if(Users){
        res.json(Users)
      }
    } catch (error) {
      
    }
  })
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
  console.log(req.body)
  console.log({ email, password })
  try {
    const user = await User.findOne({ where: { email, password} });
    console.log(user)
    if(user){
      req.session.user = user.name;
      req.session.uid = user.id;
      return res.json({userId: user.id, username: user.name, role: user.role, money: user.money})
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



router.get('/money', async (req, res) => {

  try {
    const money = await User.findAll({
      attributes: {
        include: [
          [sequelize.fn('COUNT', sequelize.col('money')), 'n_money']
        ]
      }
    });
    console.log(money)
  } catch (error) {
    
  }
});

router.get('/me', (req, res)=>{
  req.session.user?res.json({userId: req.session.uid, username: req.session.user}):res.json(null)
})

router.post('/exUser', async (req, res) => {

  const {email} = req.body
  try {
    const exUser = await User.findOne({where: {email}})
    if(exUser){
      return res.status(500).json(exUser.id)
    }
    res.status(200).json(null)
  } catch (error) {
    res.json(error)
  }
})

module.exports = router;
