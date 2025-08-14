const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

//Middleware to serve static Files
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true}));

//Set EJS for template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.render('index.ejs', {title: 'Financial Tracker'});
});

app.listen(port, () =>{
    console.log(`Server is running on port ${port}`);
})