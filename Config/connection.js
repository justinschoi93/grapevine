const mongoose = require('mongoose');

const dbURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/sgt-peppers-lonely-hearts-club-band-db';

mongoose.connect( dbURI, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useIpv6:false,
    useFindAndModify: false,
    serverSelectionTimeoutMS: 5000,
    socketTimeoutsMS: 5000,
});
mongoose.connection.on(  'connected', () => {
    console.log(`Mongoose connected to ${dbURI}`);
})
mongoose.connection.on(  'error', ( err ) => {
    console.log(`Mongoose connected to ${ err }`);
})
mongoose.connection.on(  'disconnected', () => {
    console.log(`Mongoose disconnected}`);
})

module.exports = mongoose.connection;