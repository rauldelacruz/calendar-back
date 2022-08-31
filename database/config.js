const mongoose = require('mongoose');

const dbConnection = async() => {
    try {
        await mongoose.connect( process.env.DB , {
            useNewUrlParser: true, 
            useUnifiedTopology: true,
        });
    } catch (error) {
        console.log(error);
        throw new Error('DB Error');
    }
}

module.exports = {
    dbConnection
} 