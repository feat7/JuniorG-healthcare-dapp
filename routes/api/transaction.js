const router = require("express").Router();
const auth = require("../auth");
const Transaction = require("../../services/transaction");

/**
*   REST API | GET | All the data
*/
router.get("/", async (req, res, next) => {
    let data = await Transaction.getAllData();
    res.json({ data });
});


/**
*   REST API | GET | Data entry
*/
router.get("/:id", async (req, res, next) => {
    let data = await Transaction.getDataEntry(req.params.id);
    res.json({ data });
});


/**
*   REST API | POST | Create data entry
*/
router.post("/", (req, res, next) => {
  return Transaction.createDataEntry(req.body.data)
    .then(value => {
        if(!value)
        res.json({
            message: "Created data for Transaction",
            data: value
        });
        else throw value;
    })
    .catch(e => {
        res.send(400).json({
            message: 'Failed to create Transaction data'
        });
    });
});


/**
*   REST API | PUT | Update data entry
*/
router.put("/:id/update", (req, res, next) => {
    return Transaction.updateDataEntry(req.params.id, req.body.data)
        .then(value => {
            if(!value)
            res.json({
                message: "Updated data for Transaction",
                data: value
            });
            else throw value;
        })
        .catch(e => {
            res.send(400).json({
                message: 'Failed to update Transaction data'
            });
        });
});


/**
*   REST API | DELETE | Delete data entry
*/
router.delete("/:id/delete", (req, res, next) => {
    return Transaction.deleteDataEntry(req.params.id)
        .then((err, value) => {
            if(!value)
            res.json({
                message: "Deleted data for Transaction",
                data: value
            });
            else throw err;
        })
        .catch(e => {
            res.send(400).json({
                message: 'Failed to delete Transaction data'
            });
        });
});

module.exports = router;
