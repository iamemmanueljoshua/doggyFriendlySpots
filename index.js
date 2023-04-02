const express =  require('express');
const path = require('path');
const app =  express();


app.use(express.static(path.join(__dirname, '/assets')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    console.log(`This page was requested`);
    res.render('home')
});

app.listen(8080, (req, res) =>{
    console.log('LISTENING IN PORT 8080 :)')
})