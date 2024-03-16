const mongoose = require('mongoose');



module.exports = (MONGODB_URI) => {
    mongoose.connect( MONGODB_URI, { 
        useNewUrlParser: true, 
        useUnifiedTopology: true,
    }).then(() => {
        console.log('Connected to the database');
        app.listen(port, () => {
            console.log(`Listening at http://localhost:${port}`)
        })
    }).catch((err) => {
        console.error(err.message);
        process.exit(1);
    });
};