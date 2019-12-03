const Sequelize = require("sequelize")
const {
    DATABASE_HOST
} = require("./environment")

const connection = new Sequelize(DATABASE_HOST, {
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
})
module.exports = connection;