import express from 'express'
import routes from './api/routes/userRouter'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import cors from 'cors';


const app = express()
const PORT = 8000

 
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/travelmanagement')
 
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
 
app.use(cors());

routes(app)
 
app.listen(PORT, () => {
    console.log(`you are server is running on ${PORT}`);
})