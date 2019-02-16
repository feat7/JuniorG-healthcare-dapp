const router = require("express").Router();
const auth = require("../auth");
const Patient = require("../../services/patient");

/**
*   REST API | GET | All the data
*/
router.get("/", async (req, res, next) => {
    let data = await Patient.getAllData();
    res.json({ data });
});


/**
*   REST API | GET | Data entry
*/
router.get("/:id", async (req, res, next) => {
    let data = await Patient.getDataEntry(req.params.id);
    res.json({ data });
});


/**
*   REST API | POST | Create data entry
*/
router.post("/", (req, res, next) => {
  return Patient.createDataEntry(req.body.data)
    .then(value => {
        if(!value)
        res.json({
            message: "Created data for Patient",
            data: value
        });
        else throw value;
    })
    .catch(e => {
        res.send(400).json({
            message: 'Failed to create Patient data'
        });
    });
});


/**
*   REST API | PUT | Update data entry
*/
router.put("/:id/update", (req, res, next) => {
    return Patient.updateDataEntry(req.params.id, req.body.data)
        .then(value => {
            if(!value)
            res.json({
                message: "Updated data for Patient",
                data: value
            });
            else throw value;
        })
        .catch(e => {
            res.send(400).json({
                message: 'Failed to update Patient data'
            });
        });
});


/**
*   REST API | DELETE | Delete data entry
*/
router.delete("/:id/delete", (req, res, next) => {
    return Patient.deleteDataEntry(req.params.id)
        .then((err, value) => {
            if(!value)
            res.json({
                message: "Deleted data for Patient",
                data: value
            });
            else throw err;
        })
        .catch(e => {
            res.send(400).json({
                message: 'Failed to delete Patient data'
            });
        });
});

module.exports = router;
