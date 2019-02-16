const User = require("../models/User");

/**
*   Service | GET | All the data
*/
const getAllData = async (find) => {
  return User.find(find).then(d => d);
};


/**
*   Service | GET | data entry
*/
const getDataEntry = async id => {
  return User.findById(id).then(d => d);
};


/**
*   Service | POST | create data
*/
const createDataEntry = async data => {
  return User.create(data)
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
  return User.findByIdAndUpdate(id, {$set: data})
    .then((err, value) => value)
    .catch(e => false);
};


/**
*   Service | DELETE | delete data entry
*/
const deleteDataEntry = id => {
  return User.findByIdAndRemove(id)
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