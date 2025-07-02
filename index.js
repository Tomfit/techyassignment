const express = require ('express');
const dotenv = require ('dotenv');
const morgan = require ('morgan');
const router = require ('./src/route/route')
const connectDB = require ('./src/config/db')

dotenv.config ();
const app = express();

const PORT = process.env.PORT || 5500;

app.use(express.json)
app.use(morgan('dev'))

app.get('/' ,(req, res) =>{
    res.send('Hello this is my page')
})

app.use('/api/students',router)


app.listen (PORT, ()=>{
    connectDB()
    console.log(`server is running on http://localhost:${PORT}`)
})