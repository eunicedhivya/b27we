// const express = require('express')
import express from "express";
import fs from "fs";
// import fs from "express";
import path from 'path';
// import bodyParser from "body-parser";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();
console.log(process.env.MONGO_URL);
const app = express()

// Port for localhost
const PORT = process.env.PORT

// mongoDB connection
const MONGO_URL=process.env.MONGO_URL;
async function createConnection(){
    const client = new MongoClient(MONGO_URL);
    await client.connect();
    console.log("Mongo is connected");
    return client;
}

const client = await createConnection();

app.use(express.json());

app.get('/', function (request, response) {
  response.send('Hello World!!!')
})
app.get('/movies', async function (request, response) {
    const result = await client.db("b27we2").collection("movies").find({}).toArray();
    console.log("result", result);
    response.send(result)
})
app.get('/movies/:id', async function (request, response) {
    const movie = await client.db("b27we2").collection("movies").findOne({id: request.params.id});

    movie ? response.send(movie) : response.status(404).send({
        "msg": "No Movies Found"
    })
});
app.put('/movies/:id', async function (request, response) {
    const updateData = request.body;
    const movie = await client.db("b27we2").collection("movies").updateOne({id: request.params.id}, {$set: updateData});
    response.send(movie)
});
app.delete('/movies/:id', async function (request, response) {
    const movie = await client.db("b27we2").collection("movies").deleteOne({id: request.params.id});
    response.send(movie)
});

app.post('/movies', async function (request, response) {
    const newMovie = request.body;
    // console.log(newMovie);
    const result = await client.db("b27we2").collection("movies").insertMany(newMovie);
    response.send(result)
})


app.listen(PORT, () => console.log("Server is started in "+PORT))