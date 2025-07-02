const express = require ('express');
const student = require ('../model/schema');


const studentSignup=   async (req, res) => {
        const {firstName, lastName, email, age} = req.body
        if(!firstName || !lastName || !email || !age){
            return res.status(400).json ({message:'all field is required'})
        }
    try {
        const existingStudent = await student.findOne({email});
         if (existingStudent){
        return res.status(400).json({message:'User already existing'})
         }
        const newStudent = new student ({
            firstName,
            lastName,
            email,
            age
         });
        await newStudent.save();
        res.status(201).json({message: 'student registered', student})
    }catch(error){
       console.error('Error creating profile',error);
    return res.status(500).json({message:'Internal server error'})
    }
}
 // get student
 const findStudent = async (req,res) =>{
    const email = req.query
    if (!email){
        return res.status(400).json({message:'imput correct email'})
    }try{
    const email = await student.findOne({ email });
    if(!email){
    return res.status(404).json({message: 'student does not exist'});}
    
    }catch(error){
       console.error('Error creating profile',error);
    return res.status(500).json({message:'Internal server error'})
    }
}
 // update student
  const updateStudent = async (req, res) =>{
    const {firstName, lastName, email, age} = (req.body)
    const {id} = req.params;
        if(!firstName || !lastName || !email || !age){
            return res.status(400).json ({message:'all field required'})
        }try{
            const updatedStudent = {
            firstName : firstName,
            lastName : lastName,
            email : email,
            age : age
        }  
    await student.findByIdAndUpdate(id, updatedStudent)
    res.status(201).json({message: 'student Updated', student})

    }catch(error){
       console.error('Error updating profile',error);
    return res.status(500).json({message:'Internal server error'});
    }
  }
//Delete student
const deleteStudents = async (req, res) =>{
    const {id} = req.params;
    try{
     const deleteStudent = await student.findByIdAndDelete(id);
    if(!deleteStudent){ 
        return res.status(404).json({message:'studentd not found'})
    }
        res.status(200).json({message: 'Studentdent deleted successfully'})

    }catch(error){
       console.error('Error deleting student',error);
        return res.status(500).json({message:'Internal server error'});
    }
};

//get count of student
const countStudent= async (req,res) =>{
    try{
    const count = await student.countDocuments();
    res.status(200).json({message: 'Student count retrieved', count})
    }catch(error){
       console.error('Error deleting student',error);
        return res.status(500).json({message:'Internal server error'});
    }
};


module.exports = { 
studentSignup, 
findStudent, 
updateStudent, 
deleteStudents, 
countStudent
};