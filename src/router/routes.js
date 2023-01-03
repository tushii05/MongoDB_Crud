const express = require("express");
const router = new express.Router();

const MensRanking = require("../models/mens");

//Post Data to
router.post("/mens", async (req, res) => {
    try {
        const addingMensRecords = new MensRanking(req.body);
        console.log(req.body);
        const insertMans = await addingMensRecords.save();
        res.send(insertMans);
    } catch (err) {
        res.status(400).send(err);
    }
});

//Get Data to
router.get("/mens", async (req, res) => {
    try {
        const getMens = await MensRanking.find({});
        res.send(getMens);
    } catch (err) {
        res.status(400).send(err);
    }
});

//Get Special One Data
router.get("/mens/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const getMen = await MensRanking.findById({_id});
        res.send(getMen);
    } catch (err) {
        res.status(400).send(err);
    }
});

//Patch Special One Data
router.patch("/mens/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const getMen = await MensRanking.findByIdAndUpdate(_id, req.body, {
            new: true,
        });
        res.send(getMen);
    } catch (err) {
        res.status(500).send(err);
    }
});

// Delete the data
router.delete("/mens/:id", async (req, res) => {
    try {
        // const _id = req.params.id;
        const getMen = await MensRanking.findByIdAndDelete(req.params.id);
        res.send(getMen);
    } catch (err) {
        res.status(500).send(err);
    }
});

module.exports = router;
