const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');
const { urlencoded } = require('body-parser');
const PORT = process.env.port || 8000;

const db = mysql.createPool({
    host: "db.travelbusanko.com",
    user: "travelok",
    password: "travel@1302",
    database: "dbtravelok"
    // host: "localhost",
    // user: "root",
    // password: "1234",
    // database: "testdb"
});

app.use(cors())
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

//--------{board}------------------------------------------------------------------------
// app.get("/api/boardGet", (req, res)=>{
//     const sqlQuery = "select idx as id, title, content, DATE_FORMAT(created_at,'%Y-%m-%d') as date from board";
//     db.query(sqlQuery, (err, result)=>{
//         res.send(result);
//     })
// })
app.get("/api/boardGet", (req, res)=>{
    const sqlQuery = "select * from board";
    db.query(sqlQuery, (err, result)=>{
        res.send(result);
    })
})


app.post("/api/boardPost", (req, res) => {
    const title = req.body.title;
    const content = req.body.content;
    const image = req.body.image;
    const sqlQuery = "INSERT INTO board (title, content, image, created_at) VALUES (?,?,?,DATE_FORMAT(now(),'%Y-%m-%d'))";
    db.query(sqlQuery, [title, content, image], (err, result) => {
        res.send('success!');
    });
});

app.get("/api/detaileGet", (req, res)=>{
    // res.header("Access-Control-Allow-Origin", "*");
    // res.header("Access-Control-Allow-Methods","GET, POST, PUT, DELETE, OPTIONS");
    // res.header("Access-Control-Max-Age","3600");
    // res.header("Access-Control-Allow-Headers", "Origin,Accept,X-Requested-With,Content-Type,Access-Control-Request-Method,Access-Control-Request-Headers,Authorization");

    // const idx = req.query.idx;
    const idx = 'manager';
    const sqlQuery = "SELECT COUNT(*) AS result FROM users WHERE id=?";
    db.query(sqlQuery, idx, (err, result)=>{
        res.send(result);
    })
})

//--------{login}------------------------------------------------------------------------
app.post('/api/onLogin', (req, res) => {
    console.log('hi');
    //user_id, user_pw 변수 선언
    const user_id = req.query.user_id;
    const user_pw = req.query.user_pw;
    
    //입력된 id 와 동일한 id DB에서 확인
    const sqlQuery1 = 'SELECT COUNT(*) AS result FROM users WHERE id=?';
    db.query(sqlQuery1, user_id, (err, data) => {
        if(!err) {
            if(data[0].result < 1) {    //동일한 아이디가 없다면
                res.send({'msg':'입력하신 ID는 유효하지 않습니다.'})
            }else{                      //동일한 아이디가 있다면 >> 비밀번호 확인
                const sqlQuery2 = `
                    SELECT 
                        case (SELECT COUNT(*) FROM users WHERE id=? AND password=?)
                            when '0' then NULL ELSE
                            (SELECT id FROM users WHERE id=? AND password=?)
                        END AS userId,
                        case (SELECT COUNT(*) FROM users WHERE id=? AND password=?)
                            when '0' then NULL ELSE
                            (SELECT password FROM users WHERE id=? AND password=?)
                        END AS userPw`;

                //SQL 파라메타 나열
                const params = [user_id, user_pw, user_id, user_pw, user_id, user_pw, user_id, user_pw];
                db.query(sqlQuery2, params, (err, data) => {
                    if(!err) {
                        res.send(data[0]);
                    } else {
                        res.send(err);
                    }
                })
            }
        } else {
            res.send(err);
        }
    })
})

app.listen(PORT, () => {
    console.log(`running on port ${PORT}`);
});

app.post('/api/onD', (req, res) => {
    console.log('hi');
    //user_id, user_pw 변수 선언
    const user_id = req.query.user_id;
    const user_pw = req.query.user_pw;
    const idx = 'manager';
    //입력된 id 와 동일한 id DB에서 확인
    const sqlQuery1 = "SELECT * FROM users WHERE id='manager'";
    db.query(sqlQuery1, (error, result) => {
        res.send(error,result);
    })
})