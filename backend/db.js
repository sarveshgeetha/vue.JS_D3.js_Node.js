
import shipData from './shipping.json';
const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.DATABASE_URL);
sequelize
  .authenticate()
  .then(() => {
    console.log('DB Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });


const ShipmentsDB = ()=> {return sequelize.define('shipment_detail', {
shipment_id: {
    type: Sequelize.INTEGER,
    primaryKey: true
},
source_id: {
    type: Sequelize.STRING
},
destination_id: {
    type: Sequelize.STRING
},
weight: {
    type: Sequelize.INTEGER
},
cost: {
    type: Sequelize.INTEGER
},
new_shipment_id: {
    type: Sequelize.INTEGER
},
new_weight: {
    type: Sequelize.INTEGER
},
new_cost: {
    type: Sequelize.INTEGER
},
total_tls: {
    type: Sequelize.INTEGER
}
},
{
    tableName: 'shipment_detail',
    createdAt: false,
    updatedAt:false,   
    indexes: [
    {
      unique: true,
      fields: ['shipment_id']
    },]
})
};
ShipmentsDB().sync({ force: true }).then(()=>{
    ShipmentsDB().bulkCreate(shipData)
        .then(() => {
            console.log("Initial Shipping Data Loaded");
    })
})


module.exports = { ShipmentsDB };