// use the path of your model
const Customer = require('../models/customerModel');
const mongoose = require('mongoose');
// use the new name of the database
const url = 'mongodb://127.0.0.1:27017/vehicleservice_management';
beforeAll(async () => {
 await mongoose.connect(url, {
 useNewUrlParser: true,
 useUnifiedTopology : true
 });
});
afterAll(async () => {
 await mongoose.connection.close();
});
// describe('Customer Schema test anything', () => {
// //the code below is for insert testing
//  it('Add customer testing anything', () => {
//  const customer = {
//  'username': 'ambika',
//  'address': 'asd'
//  };
 
//  return Customer.create(customer)
//  .then((pro_ret) => {

//  });
//  });

//he code below is for delete testing
 it('to test the delete product is working or not', async () => {
 const status = await Customer.deleteOne();
 
});


// it('to test the update', async () => {
//  return Customer.findOneAndUpdate({_id :Object('620e0c12ac7e2e4073733a8e')}, 
// {$set : {username:'Ishmarika'}})
//  .then((pp)=>{

//  });
 
// });
 
// })



