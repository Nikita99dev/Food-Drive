const express = require('express');
// const { sessionChecker, sessionLoger, layoutchanger } = require('../middleware/commonmiddleware');
const { User, Marker, PlusMoney } =  require('../db/models')
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
  const { name, password, role, email, money} = req.body;
  console.log(money)
  
  try{
    const curUser = await User.findOne({where: {email}})
    console.log(curUser)
    if(curUser){
      return res.status(500).json({'ok': false})
    } else {
      console.log({name, role, password, email})
      const user = await User.create({name, role, password, email})
      if(money){
        console.log('0000000000', money,user.id)
       const money1 = await PlusMoney.create({amount:money, userId: +user.id})
       console.log(money1)
      }
      // console.log('user idddddddddddddddddddddddddddddddddddddddddddddddddddddd', user.id)
      res.json(user.id)
    }
  }
  catch(e){
    console.log(e)
  }
});

router.get('/AllUs', (req, res) => {
  try {
    const Users = User.findAll({where : { role: receiver}})
    if(Users){
      res.json(Users)
    }
  } catch (error) {
    
  }
})

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
    // console.log(user)
    let money = 0;
    if(user.role === 'donor'){
      console.log('id', user.id, user.role)
      money = await PlusMoney.findOne({where: {userId: user.id }})
      console.log(money)
      req.session.user = user.name;
      req.session.uid = user.id;
      req.session.role = user.role;
      req.session.money = money.amount
      console.log({userId: user.id, username: user.name, role: user.role, money: money.amount})
      return res.json({userId: user.id, username: user.name, role: user.role, money: money.amount})
    } else if(user.role === 'receiver') {
      req.session.user = user.name;
      req.session.uid = user.id;
      req.session.role = user.role;
      return res.json({userId: user.id, username: user.name, role: user.role, money: 0})
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



// router.get('/money', async (req, res) => {

//   try {
//     const money = await User.findAll({
//       attributes: {
//         include: [
//           [sequelize.fn('COUNT', sequelize.col('money')), 'n_money']
//         ]
//       }
//     });
//     console.log(money)
//   } catch (error) {
    
//   }
// });

router.get('/me', (req, res)=>{
  req.session.user?res.json({userId: req.session.uid, username: req.session.user, role: req.session.role, money: req.session.money}):res.json(null)
})

router.post('/exUser', async (req, res) => {

  const {email} = req.body
  console.log(email)
  try {
    const exUser = await User.findOne({where: {email}})
    console.log(exUser)
    if(exUser){
      return res.status(500).json(exUser.id)
    }
    res.status(200).json(null)
  } catch (error) {
    console.log(error)
    res.json(error)
  }
})

module.exports = router;
