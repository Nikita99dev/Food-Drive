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
    const user = await Marker.findOne({where:  {email: email}})
    console.log(']]]]]]]]]]]]]]]]', email)
    if(user.id){
      res.json(user.id)
    }
  } catch (error) {
    res.json(error)
  }
})


router.post('/getOne', async (req, res ) => {
  // console.log(req.body)
  try {
    const { userId }  = req.body;
    const map = await Marker.findOne({where: { userId}})
    console.log(map)
    if(map?.userId){
      res.json(map)
    } else {
      res.status(500).json({e:'not found'})
    }
  } catch (error) {
    res.json(error)
  }
})

router.get('/getAll', async (req, res) => {
  try {
    const all = await Marker.findAll({where: {isApproved: false}, include: {model: User, rigth: true, attributes:['name']}})
    console.log(all[0].User.dataValues.name)
   const obj = []
   all.map((el)=> {
     obj.push(
       {id: el.dataValues.id, address: el.dataValues.address, latitude: el.dataValues.latitude,  longitude: el.dataValues.longitude, name: el.User.dataValues.name}
        )
    })
    console.log(obj)
    if(obj[0].id){
      res.json(obj)
    }
  } catch (error) {
    
  }
})

router.patch('/private', async (req, res) => {
  try {
    
  } catch (error) {
    
  }
})


router.delete('/delete', async (req, res) =>{
  const {id} = req.body
  try {
    const res = await Marker.destroy({where: { id: id }})
    console.log(res)
    if(res){
      return res.json({id})
    }
  } catch (error) {
    res.json(error)
  }
})


router.post('/update', async (req, res) => {
  const { id } = req.body
console.log(id)
  try {
    const record = await Marker.update({isApproved: true}, {where: {id}})
    console.log(record)
    if(record){
      res.json({record})
    }
  } catch (error) {
    
  }
})

module.exports = router
