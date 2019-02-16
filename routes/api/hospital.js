const router = require("express").Router();
const auth = require("../auth");
const Hospital = require("../../services/hospital");

/**
*   REST API | GET | All the data
*/
router.get("/", async (req, res, next) => {
    let data = await Hospital.getAllData();
    res.json({ data });
});


/**
*   REST API | GET | Data entry
*/
router.get("/:id", async (req, res, next) => {
    let data = await Hospital.getDataEntry(req.params.id);
    res.json({ data });
});


/**
*   REST API | POST | Create data entry
*/
router.post("/", (req, res, next) => {
  return Hospital.createDataEntry(req.body.data)
    .then(value => {
        if(!value)
        res.json({
            message: "Created data for Hospital",
            data: value
        });
        else throw value;
    })
    .catch(e => {
        res.send(400).json({
            message: 'Failed to create Hospital data'
        });
    });
});


/**
*   REST API | PUT | Update data entry
*/
router.put("/:id/update", (req, res, next) => {
    return Hospital.updateDataEntry(req.params.id, req.body.data)
        .then(value => {
            if(!value)
            res.json({
                message: "Updated data for Hospital",
                data: value
            });
            else throw value;
        })
        .catch(e => {
            res.send(400).json({
                message: 'Failed to update Hospital data'
            });
        });
});


/**
*   REST API | DELETE | Delete data entry
*/
router.delete("/:id/delete", (req, res, next) => {
    return Hospital.deleteDataEntry(req.params.id)
        .then((err, value) => {
            if(!value)
            res.json({
                message: "Deleted data for Hospital",
                data: value
            });
            else throw err;
        })
        .catch(e => {
            res.send(400).json({
                message: 'Failed to delete Hospital data'
            });
        });
});

module.exports = router;
