const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const flash = require('connect-flash');
const cors = require('cors');
require('dotenv').config();

const Sequelize = require('sequelize');

// * 시퀄라이즈 오토를 이용해 model 정의 파일을 models 폴더내에 자동생성해준다.
// * 현재 서버 구동시 계속해서 실행되어 첫 models 파일 정의하는 용도로 사용한다.
// * 사용법 : 주석을 해제한뒤 서버 스타트하고 서버가 정상적으로 구동되면 models 폴더내에 파일들이 생성된걸 확인한후 서버를 정지시킨다. 그후 다시 주석으로 묶는다
/*
const SequelizeAuto = require('sequelize-auto');
const auto = new SequelizeAuto('tmp' , 'maindb' , 'vltxnrpej12' , {
    host : 'testupload.ckphr4trm0oh.ap-northeast-2.rds.amazonaws.com',
    directory : './src/models' ,
    port : '3306'    
});
auto.run((err) => {
    if(err) throw err;
});
*/

const mainRouter = require('./routes/mainRouter');


const app = express();
//sequelize.sync();


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.set('port', process.env.PORT || 1000);

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(flash());

app.use('/', mainRouter);

app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.use((err, req, res, next) => {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    res.status(err.status || 500);
    res.render('error');
});

app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 대기중');
});