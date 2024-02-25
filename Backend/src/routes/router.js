const express = require("express");
const LogType = require('../Model/Expens_Log_Type');
const Log = require('../Model/Expens_Log');
const Tag = require('../Model/Expens_Tag');
const router = express.Router();

router.get('/expense-data-trash', async (req, res, next) => {
    try {
        const result = await Log.find({trash: 1}).exec();
        res.status(200).json(result);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
        next(err);
    }

})

router.get('/expense-data-type', async (req, res, next) => {
    try {
        const result = await LogType.find().exec();
        // console.log(result);
        const output = result.map((item) => ({
            value: item._id, 
            label: item.description
        }));
        res.status(200).json(output);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
        next(err);
    }
})

router.get("/update-data/:id", async (req, res, next) => {
    try {
        const id = req.params.id;
        const expenseLog = await Log.findById(id); 
        if (!expenseLog) {
            return res.status(404).json({ message: "Expense log not found" });
        }
        res.status(200).json(expenseLog);
    } catch (error) {
        console.error(error);
        res.status(500).json(error);
        next(error);
    }
});

router.delete("/expense-data-type/:id", async (req, res, next) => {
    try {
        const id = req.params.id;
        await LogType.deleteOne({ _id: id }); 
        res.status(200).json({ message: "ok" });
    } catch (error) {
        console.error(error);
        res.status(500).json(error);
        next(error);
    }
});


router.delete("/expense-data/delete/:id", async (req, res, next) => {
    try {
        const desID = req.params.id;
        await Log.findByIdAndUpdate(desID, { trash: 1 }); 
        res.status(200).json({ message: "ok" });
    } catch (error) {
        console.error(error);
        res.status(500).json(error);
        next(error);
    }
});

router.delete("/expense-data/recycle/:id", async (req, res, next) => {
    try {
        const desID = req.params.id;
        await Log.findByIdAndUpdate(desID, { trash: 0 }); 
        res.status(200).json({ message: "ok" });
    } catch (error) {
        console.error(error);
        res.status(500).json(error);
        next(error);
    }
});

router.delete("/expense-data/hard-delete/:id", async (req, res, next) => {
    try {
        const desID = req.params.id;
        await Log.findByIdAndDelete(desID); 
        res.status(200).json({ message: "ok" });
    } catch (error) {
        console.error(error);
        res.status(500).json(error);
        next(error);
    }
});

router.post("/expense-data-filter", async (req, res, next) => {
    try {
        const { startDate, endDate } = req.body;
        console.log(startDate, endDate);
        const result = await Log.find({
            date: { $gte: startDate, $lt: endDate }, 
            trash: 0 
        })
            .sort({ date: -1 }) 
            .exec();
        // console.log(result);
        res.status(200).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json(error);
        next(error);
    }
});

router.post("/expense-data", async (req, res, next) => {
    try {
        const data = req.body;
        const newLog = new Log(data); 
        await newLog.save(); 
        res.json({message: 'ok'});
    } catch (error) {
        console.error(error);
        res.status(500).json(error);
        next(error);
    }
});

router.post("/update-expense-data", async (req, res, next) => {
    try {

        const updateData = req.body;
        await Log.findByIdAndUpdate(updateData.id, updateData); 
        res.status(200).json({ message: "ok" });
    } catch (error) {
        console.error(error);
        res.status(500).json(error);
        next(error);
    }
});

router.post("/expense-tag", async (req, res, next) => {
    try {
        const data = req.body;
        const newTag = new Tag(data);
        await newTag.save();
        res.status(200).json({ message: "ok" });
    } catch (error) {
        console.error(error);
        res.status(500).json(error);
        next(error);
    }
});

router.post("/expense-data-type", async (req, res) => {
    try {
        const data = req.body;
        const newLogType = new LogType(data); 
        newLogType.save(); 
        const tookdata = await LogType.find().exec();
        res.status(200).json(tookdata);
    }  catch(err){
        console.log(err);
    }
});

module.exports = router;
