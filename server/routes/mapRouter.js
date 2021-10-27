const express = require('express');
const {sessionLoger} = require('../middlewares/common')
const { Marker, User } = require('../db/models');

const router = express.Router();

router.use(sessionLoger)

router.post('/insertion', async (req,res) =>{

  const { address, latitude, longitude, userId } = req.body;
console.log(address, latitude, longitude, userId)

  try {
    const mapDb = await Marker.create({address, latitude, longitude, userId})
    console.log('mapid',mapDb?.userId)
    res.json(mapDb)
  } catch (error) {
    res.json(error)
  }
})

router.post('/idCheck', async (req,res)=>{
  // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  const {email} = req.body
  console.log('1111111', req.body)
  console.log('1111111', email)
  try {
    const user = await findOne({where:  {email: email}})
    console.log(']]]]]]]]]]]]]]]]', email)
    if(user.id){
      res.json(user.id)
    }
  } catch (error) {
    res.json(error)
  }
})

module.exports = router
