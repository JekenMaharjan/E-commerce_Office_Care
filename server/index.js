const express = require('express')
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(cors())
const port = 9000
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/OfficeCareDB');

// const { Schema } = mongoose;

const userSchema = new mongoose.Schema({
  userName: { type: String, required: true, unique: true },
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phoneNumber: { type: Number, required: true },
  password: { type: String, required: true },
  confirmPassword: { type: String, required: true },
  address: {
      street: { type: String, required: true },
      city: { type: String, required: true },
      state: { type: String, required: true },
      zipCode: { type: String, required: true },
      country: { type: String, required: true }
  },
  paymentMethod: { type: String, enum: ['Credit Card', 'PayPal', 'Bank Transfer'], required: true }
})

// Create the model
const User = mongoose.model('User', userSchema);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// REGISTER
app.post('/register', async(req, res) => {
  // email should not exist
  const user = await User.exists({email: req.body.email})
  if(user) return res.send("Email is taken")
    // password should hash
    req.body.password = await bcrypt.hash(req.body.password, saltRounds)
    // save to DB
    User.create(req.body)
    res.send('Registration Successful!!')
  })

// LOGIN
app.post('/login', async(req, res) => {
  // email should exist
  const user = await User.findOne({email: req.body.email})
  if(!user) return res.send("Email does not exist")
    // compare password from db with body.password, objective is password should match
  const isMatched = await bcrypt.compare(req.body.password, user.password)
  if(!isMatched) return res.send("Invalid Password!!")
    // generate a unique token based on email
  const token = jwt.sign({email: req.body.email},'1b2891ba5b6da905eeea2687d4e454d427c0fc8127a4dc90451d2478047708b55802919a5054c35e2922b071d5ae41041a683c652ebe798dc7ed9e7dd87215a264687ba1deab80a5c3e0691fe179cca16a4f0d3cf5025ee42d10459254827b2e1315d988680fc9f31426d0dd1edfe8fad85b2f526dd973c0ebc715b4efc30b25');
  res.send({token, user})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
