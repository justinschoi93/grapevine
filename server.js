const express = require('express');
const session = require('express-session');
const db = require('./config/connection');
const routes = require('./routes');

const port = process.env.PORT || 3001;
const app = express();

//  Usebody-parser middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Add routes and define routes middleware
app.use(routes);

// Use the session middleware with MongoDB connect-mongo store
const MongoStore = require('connect-mongo');
const MONGODB_URI = process.env.MONGODB_URI || `mongodb+srv://justinschoi93:<Jamba4126!>@cluster0.xper7wk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const sessionStore = MongoStore.create({
    mongoUrl: MONGODB_URI,
    touchAfter: 24 * 60 * 60,
    crypto: {
        secret: 'secret-string'
    }
});

app.use(
    session({
        secret: 'secret-string',
        store: sessionStore,
        resave: false,
        saveUninitialized: true,
        cookie: {
            maxAge: 24 * 60 * 60 * 1000,
        },
    })
);

require(`./config/connection`)(MONGODB_URI);

module.exports = app;