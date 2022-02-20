const db = require("../models");
const Save = db.save;

exports.create = async (req, res) => {
    if (!req.account._id) {
        res.status(400).send({
            message: "Owner cannot be empty."
        })
        return;
    }

    const save = new Save({
        name: req.body.name,
        saveData: req.body.saveData,
        score: req.body.score,
        owner: req.account._id,
    })

    try {
        await save.save()
        res.status(201).send()
        return;
    } catch (e) {
        res.status(400).send(e)
        return;
    }
}

exports.getSaveCount = async (req, res) => {
    try {
        const count = await Save.find({
            owner: req.account._id
        }).count();

        if (!count) {
            return res.status(404).send();
        }

        res.status(200).send(count.toString(10));
    } catch (e) {
        console.log(e);
        res.status(500).send();
    }
}

exports.getSaves = async (req, res) => {
    try {
        const saves = await Save.find({
            owner: req.account._id
        })

        if (!saves) {
            return res.status(404).send();
        }

        res.status(200).send(saves);
    } catch (e) {
        console.log(e);
        res.status(500).send();
    }
}

exports.getPaginatedSaves = async (req, res) => {
    try {
        let {
            pageNumber,
            nPerPage
        } = req.query;
        [pageNumber, nPerPage] = [pageNumber, nPerPage].map(Number);

        const saves = await Save.find({
                owner: req.account._id
            })
            .skip(pageNumber > 0 ? ((pageNumber - 1) * nPerPage) : 0)
            .limit(nPerPage);

        if (!saves) {
            return res.status(404).send();
        }

        res.status(200).send(saves);
    } catch (e) {
        console.log(e);
        res.status(500).send();
    }
}

exports.delete = async (req, res) => {
    try {
        const save = await Save.findOneAndDelete({
            _id: req.params.id,
            owner: req.account._id
        });

        if (!save) {
            res.status(404).send();
        }

        res.send(save);
    } catch (e) {
        res.status(500).send()
    }
}