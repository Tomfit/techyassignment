const express = require('express');
const { studentSignup, findStudent, updateStudent, deleteStudents, countStudent }  = require ('../controller/controller');
const router = express.Router();

router.post('/studentSignup', studentSignup);
router.get('/findStudent/:Id', findStudent);
router.put('/updateStudent/:Id', updateStudent);
router.delete('/deleteStudents/:Id', deleteStudents);
router.get('/countStudent', countStudent);


module.exports = router;