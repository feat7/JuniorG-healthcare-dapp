const Hospital = require("../models/Hospital");

/**
*   Service | GET | All the data
*/
const getAllData = async () => {
  return Hospital.find().then(d => d);
};


/**
*   Service | GET | data entry
*/
const getDataEntry = async id => {
  return Hospital.findById(id).then(d => d);
};


/**
*   Service | POST | create data
*/
const createDataEntry = async data => {
  return Hospital.create(data)
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
  return Hospital.findByIdAndUpdate(id, {$set: data})
    .then((err, value) => value)
    .catch(e => false);
};


/**
*   Service | DELETE | delete data entry
*/
const deleteDataEntry = id => {
  return Hospital.findByIdAndRemove(id)
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