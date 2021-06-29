// IMPORTING EXPRESS FRAMEWORK


// EXPRESS IS A WEB FRAMEWORK IN JS WHICH SIMPLIEFIES A LOT OF PROCESS
// AND ALLOWS DEVS NOT TO REINVENT WHEEL ALL THE TIME AND HAS PREDEFINE SET OF THINGS WHICH WE USE ALL THE TIME

// THESE ARE 3RD PARTY MODULES SO AFTER INSTALLING THEM WE DIRECTLY USE THEM

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}



const express = require('express');
const app = express();

const expressLayouts = require('express-ejs-layouts');


const indexRouter = require('./routes/index');

// THE VISUAL PART OF THE WEB
// WE USE VIEW ENGINE EJS
app.set('view engine', 'ejs');

// ALL FILES RELATED TO IT GOES INSIDE VIEWS
app.set('views', __dirname + '/views');

// WE SET EXPRESSLAYOUTS AS OUR LAYOUT OPTION
app.set('layout', 'layouts/layout');
app.use(expressLayouts);

// THIS IS A SET OF FILES WHICH CAN BE VIEWD BY EVERYONE
app.use(express.static('public'));



const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true});


const db = mongoose.connection;
db.on('error', error => console.error(error));
db.once('open', () => console.log('connected to mongoose'));

app.use(indexRouter);

// CREATING CLIENT AND DEV PORT(FOR PROTOTYPING AND TESTING)
app.listen(process.env.PORT || 3000);

// EVERYTHING NEEDED TO RUN THE WEBSITE
