import express from 'express'
import routes from './api/routes/userRouter'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import cors from 'cors';
const app = express()
const PORT = 8000
// const app = require("express")();
const stripe = require("stripe")("sk_test_4eC39HqLyjWDarjtT1zdp7dc");
app.use(require("body-parser").text());
app.post("/charge", async (req, res) => {
    try {
      let {status} = await stripe.charges.create({
        amount: 2000,
        currency: "usd",
        description: "An example charge",
        source: req.body
      });
  
      res.json({status});
    } catch (err) {
      res.status(500).end();
    }
  });

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/travelmanagement')
 
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
 
app.use(cors());

routes(app)
 
app.listen(PORT, () => {
    console.log(`you are server is running on ${PORT}`);
})