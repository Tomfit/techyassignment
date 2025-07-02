const mongoose = require ('mongoose');

const studentSchema = new mongoose.Schema({
 firstName: { 
 type: String,
 required: true,
 trim: true
},

lastName: {
   type: String,
   required: true,
   trim: true 
},
email: {
    type: String,
    required: true,
    trim: true,
    unique: true
},

age: {
    type: Number,
    required:true,
    trim: true
},  
}, {
    timestamps: true,
    versionKey: false
})

const student = mongoose.model('student',studentSchema);
module.exports = student