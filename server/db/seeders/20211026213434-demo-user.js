"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          name: "admin",
          email: "adminas@mail.ru",
          password: "expressTheBest",
          role: "receiver",
          money:0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "admin",
          email: "adminwd@mail.ru",
          password: "expressTheBest",
          role: "receiver",
          money:0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "admin",
          email: "adminwd@mail.ru",
          password: "expressTheBest",
          role: "receiver",
          money:0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "admin",
          email: "adminzx@mail.ru",
          password: "expressTheBest",
          role: "receiver",
          money:0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "admin",
          email: "adminsaa@mail.ru",
          password: "expressTheBest",
          role: "receiver",
          money:0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("People", null, {});
  },
};
