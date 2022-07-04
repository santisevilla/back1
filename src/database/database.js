import Sequelize from 'sequelize'

export const sequelize = new Sequelize('disney', 'postgres', '40070859',{
    host: 'localhost',
    dialect: 'postgres'
})