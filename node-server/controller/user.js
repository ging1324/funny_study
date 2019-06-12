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

/**
 * 사용자 추가(회원가입) API
 * @type POST
 * @param {*} req 
 * @param {*} result 
 */
function addUser (req, result) {
    const user_info = req.body;
    let qry = 'insert into user_info(user_id, user_passwd, user_name, user_address, user_birthday, user_sex) values(?,?,?,?,?,?)'
    let param = [user_info.user_id, user_info.user_passwd, user_info.user_name, user_info.user_address, user_info.user_birthday, user_info.user_sex ]
    connection.query(qry, param, function (err, res) {
        console.info('err', err);
        console.info('result', res);
        result.status(200).json({
            "result": res
        })
    }) 
}

/**
 * user_id 로 사용자 정보 조회하는 API
 * @type GET
 * @param { user_id } req 
 * @param {*} result 
 */
function getUserInfo (req, result) {
    let qry='select  user_name, user_id, user_address, user_sex, user_birthday, user_created from user_info where user_id="'+req.query.user_id+'"';
    connection.query(qry, function (err, res) {
        if(err)
        console.error('에러입니다.')


        console.info('success', res)

        result.status(200).json({
            "result":res[0]
        })
    })
    

}

/**
 * 아이디와 비밀번호를 받아서 결과 전달하는 API
 * @typw GET
 * @param {user_id, user_passwd} req 
 * @param {*} result 
 */
function login (req, result) {
    let qry= 'select count(*) as cnt from user_info where user_id=? and user_passwd=?';
    let param = [req.query.user_id, req.query.user_passwd];
    connection.query(qry, param, function (err, res) {
        if(err)
        console.err('에러입니다', err)
        if(res[0].cnt != 1){
            result.status(200).json({
                "result":"fail"
            })
        }else{
            result.status(200).json({
                "result":"success"
            })
        }
    })
}

module.exports = {
    basicAPI: basicAPI,
    testAPI: testAPI,
    postTestAPI: postTestAPI,
    addUser: addUser,
    login: login,
    getUserInfo: getUserInfo
}