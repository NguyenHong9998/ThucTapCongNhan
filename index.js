var express = require('express');
var cookieParser = require('cookie-parser')
var session = require('express-session');
var app = express();
var port = 5000;
var userAuthentication = require("./authentication/authentication.user")
var adminAuthencation = require("./authentication/authentication.admin")
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())
app.use(session({
    secret: "kjfdbnkjvnbfdjklbvkljsdbklvjfbdskljvbdskjvbdfksjlbkljbljkbkj",
    cookie :{}
}));
const Database = require('./models/database');

app.use(express.static('public'));
app.set('view engine','pug');
app.set('views','./public/views');

const userRouter = require('./router/user.router.js');
const loginRouter = require('./router/login.router.js');
const adminRouter = require('./router/admin.router.js');
const commentRouter = require('./router/comment.router.js');

app.get('/', (req, res) => {
    res.render('view1');
});


app.use('/login',loginRouter);
app.use('/user',userAuthentication.checkSignIn,userRouter);
app.use('/admin',adminAuthencation.checkSignIn,adminRouter);
app.use('/comment',commentRouter);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });