const express = require('express');
const { MongoClient } = require('mongodb');

const PORT = process.env.PORT || 3001;
const app = express();

const connectionStringURI = `mongodb://127.0.0.1:27017`;

const client = new MongoClient(connectionStringURI);

let db;

const dbName = 'happycampersDB';

client.connect()
    .then(()=>{
        console.log('Connected successfully to MongoDB');
        db = client.db(dbName);

        app.listen(port, () => {
            console.log(`Listening at http://localhost:${port}`);
        });


    })
    .catch((err) => {
        console.error('Mongo connection error: ', err.message);
    });

app.use(express.json());

