const {Schema,model, SchemaTypeOptions} = require('mongoose')

const Booked_Covid = new Schema({
    Name : {
        type : String,
        // required : true 
    },
    Adhar_Number : {
        type : String,
        // required : true  
    },
    H_Name : {
        type : String,
        // required : true  
    },
    Dose : {
        type : Number,
        // required : true 
    },
    age : {
        type : Number,
        // required : true 
    },
    hour: {
        type : Number,
    },
    minute: {
        type : Number
    },
    month: {
        type : Number
    },
    day : {
        type : Number
    }

},{timestamps: true});

module.exports = model('Booked_Covid',Booked_Covid)
