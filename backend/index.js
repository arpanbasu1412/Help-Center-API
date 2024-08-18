// const dbConnect = require('./mongodb');
const express = require('express');
require("./config");
const Service = require('./service');
const app = express();
app.use(express.json());
const cors = require('cors');
const e = require('express');
app.use(cors());

// MONGODB

// app.get('/cards',async (req,resp)=>{
//     let data = await dbConnect();
//     data= await data.find().toArray();
//     resp.send(data);
// });

// app.post("/cards", async (req,resp)=>{
//     let data = await dbConnect();
//     let result = await data.insertOne(req.body);
//     resp.send(result);
//     // console.log(req.body);
//     // resp.send(req.body);

// })


// MOONOGOOSE

app.get("/", async (req, resp) => {
    try {
        resp.send("Server is running");
    } catch (e) {
        console.log(e);
    }
});

app.get("/cards", async (req, resp) => {
    try {
        const data = await Service.find();
        resp.send(data);
    } catch (e) {
        console.log(e);
    }
});

app.post("/cards", async (req, resp) => {
    try {
        let data = new Service(req.body);
        let result = await data.save();
        console.log(result);
        resp.send(result);
    } catch (e) {
        console.log(e);
    }
});

app.get("/cards/:key", async (req, resp) => {
    try {
        let data = await Service.find(
            {
                "$or": [
                    { title: { $regex: req.params.key } }
                ]
            }
        )
        resp.send(data);
    } catch (e) {
        console.log(e);
    }
})


app.listen(5000);

