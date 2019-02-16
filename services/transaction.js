const Transaction = require("../models/Transaction");


/**
*   Service | GET | All the data
*/
const getAllData = async () => {
  return Transaction.find().then(d => d);
};


/**
*   Service | GET | data entry
*/
const getDataEntry = async id => {
  return Transaction.findById(id).then(d => d);
};


/**
*   Service | POST | create data
*/
const createDataEntry = async data => {
  return Transaction.create(data)
    .then((err, value) => {
        if(err!=null) return value;
        else throw err;
    })
    .catch(e => false);
};


/**
*   Service | PUT | update data entry
*/
const updateDataEntry = (id, data) => {
  return Transaction.findByIdAndUpdate(id, {$set: data})
    .then((err, value) => value)
    .catch(e => false);
};


/**
*   Service | DELETE | delete data entry
*/
const deleteDataEntry = id => {
  return Transaction.findByIdAndRemove(id)
    .then((err, value) => {
        if(err!=null) return value;
        else throw err;
    })
    .catch(e => false);
};

module.exports = {
  getAllData,
  getDataEntry,
  createDataEntry,
  updateDataEntry,
  deleteDataEntry
};