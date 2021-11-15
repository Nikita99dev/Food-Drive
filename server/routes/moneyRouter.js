const express = require("express");
const { PlusMoney, MinusMoney } = require("../db/models")


const router = express.Router()



router.post('/input', async (req,res ) => {

  const { userId, money } = req.body
  try {
    const amount = PlusMoney.create({ amount: money, userId})
  } catch (error) {
    
  }
})



router.get("/available", async (req, res) =>{
  try {
    const available = await PlusMoney.findAll({
      attributes: { 
      include: [[Sequelize.fn("COUNT", Sequelize.col("amount")), "n_amount"]] 
  },
})
console.log(available)
  res.json(available)
  } catch (error) {
    
  }
})


module.exports = router
