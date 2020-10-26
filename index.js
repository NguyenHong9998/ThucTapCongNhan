const express = require('express');
const app = express();
const port = 5000;

app.use(express.static('public'));
app.set('view engine','pug');
app.set('views','./public/views');

app.get('/', (req, res) => {
    res.render('view1');
});

app.get('/login',(req,res)=>{
    res.render('loginview');
});
app.get('/register_layout',(req,res)=>{
    res.render('register_layout');
});
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });