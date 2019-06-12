var mysql_db = require('../db/mysql')();
var connection = mysql_db.init();
mysql_db.test_open(connection);

function basicAPI (req, res) {
    res.status(200).json(
        {
            "success": true
        }
    )
}

function testAPI (req, res) {
    var qry = 'select user_name from user_info'
    connection.query(qry, function (err, result) {
        console.info('err', err);
        console.info('result', result[0].user_name);
        res.status(200).json({
            "result": result[0]
        })
    }) 
}

function postTestAPI (req, res) {
    const user_message = req.body.message;
    console.info("post req", req.body)
    res.status(200).json({
        "message": user_message
    })
}

function addUser (req, res) {
    const user_info = req.body;
    let qry = 'insert into user_info(user_id, user_passwd, user_name, user_address, user_birthday, user_sex) values(?,?,?,?,?,?)'
    let param = [user_info.user_id, user_info.user_passwd, user_info.user_name, user_info.user_address, user_info.user_birthday, user_info.user_sex ]
    connection.query(qry, param, function (err, result) {
        console.info('err', err);
        console.info('result', result);
        res.status(200).json({
            "result": result
        })
    }) 
}

module.exports = {
    basicAPI: basicAPI,
    testAPI: testAPI,
    postTestAPI: postTestAPI,
    addUser: addUser
}