const express = require("express");
const { PlusMoney, MinusMoney } = require("../db/models");

const router = express.Router();

router.post("/input", async (req, res) => {
  const { userId, money } = req.body;
  try {
    const amount = PlusMoney.create({ amount: money, userId });
  } catch (error) {}
});

router.get("/available", async (req, res) => {
  try {
    const available = await PlusMoney.findAll({
      attributes: {
        include: [[Sequelize.fn("COUNT", Sequelize.col("amount")), "n_amount"]],
      },
    });
    console.log(available);
    res.json(available);
  } catch (error) {}
});

router.patch("/update", async (req, res) => {

  const { state, userId } = req.body;
  try {
    const { amount } = await PlusMoney.findOne({ where: { userId } });
 
    const result = amount + Number(state)

    if (result) {
      const finalAmount = await PlusMoney.update(
        { amount: result},
        { where: { userId } }
      );
      if(finalAmount){
        res.json(result)
      }
    }
  } catch (error) {
    throw error
  }
});

module.exports = router;
