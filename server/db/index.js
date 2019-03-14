const mongoose = require('mongoose')
mongoose.Promise = global.Promise

let MONGO_URL
const MONGO_LOCAL_URL = 'mongodb://localhost/eventplandb'

if (process.env.MONGODB_URI) {
	MONGO_URL = process.env.MONGODB_URI
} else {
	MONGO_URL = MONGO_LOCAL_URL
}

mongoose.connect(MONGO_URL).then(
    () => { 
        /** ready to use. The `mongoose.connect()` promise resolves to undefined. */ 
        console.log('Connected to Mongo');
        
    },
    err => {
         /** handle initial connection error */ 
         console.log('error connecting to Mongo: ')
         console.log(err);
         
        }
);

module.exports = mongoose.connection;