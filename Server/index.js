const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();
const bodyParser = require('body-parser');
const cors = require('cors');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({ origin: '*' }));

const authRoutes = require('./src/routes/authRoutes')

//MongoDB Node.js Driver version 3.6.0 
// If you use these in version 4.0.0 this will deprecate
// const connectionParams = {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// }

const port = process.env.PORT || 3000;

mongoose.connect(process.env.MONGODB_URL).then(() => {
    console.log('Mongoose connected to db');

    app.listen(port, () =>
    console.log(`App listening on port ${port}!`)
)
}).catch((err) => console.error('Failed to connect to MongoDB', err));

// mongoose.connection.on('connected', ()=>{
//     console.log('Mongoose connected to db')
// });

// mongoose.connection.on('disconnected',()=>{
// console.log('Mongoose connection is disconnected.')
// });

app.use('/MERN',authRoutes);

app.use('/', (req,res)=>{
    res.json('Welcome to nodeJS ..!');
});

