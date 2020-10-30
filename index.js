const express = require('express');
const app = express();
const port = 5000;

var Database = require('./models/database');

app.use(express.static('public'));
app.set('view engine','pug');
app.set('views','./public/views');

const userRouter = require('./router/user.router.js');
const loginRouter = require('./router/login.router.js');
const adminRouter = require('./router/admin.router.js');

app.get('/', (req, res) => {
    res.render('view1');
});



app.use('/login',loginRouter);
app.use('/user',userRouter);
app.use('/admin',adminRouter);
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });