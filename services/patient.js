const Patient = require("../models/Patient");


/**
*   Service | GET | All the data
*/
const getAllData = async () => {
  return Patient.find().then(d => d);
};


/**
*   Service | GET | data entry
*/
const getDataEntry = async id => {
  return Patient.findById(id).then(d => d);
};


/**
*   Service | POST | create data
*/
const createDataEntry = async data => {
  return Patient.create(data)
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
  return Patient.findByIdAndUpdate(id, {$set: data})
    .then((err, value) => value)
    .catch(e => false);
};


/**
*   Service | DELETE | delete data entry
*/
const deleteDataEntry = id => {
  return Patient.findByIdAndRemove(id)
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