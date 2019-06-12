var mysql_db = require('../db/mysql')();tion = mysql_db.init();
var connection = mysql_db.init();

/**
 * 게시판 전체 목록 조회
 * @type GET
 * @param {*} req 
 * @param {*} result 
 */
function boardList (req, result) {
    let qry='select * from board_info';
    connection.query(qry, function (err, res) {
        if(err)
        console.error('에러입니다.')


        console.info('success', res)

        result.status(200).json({
            "result":res[0]
        })
    })
}

function boardDetail (req, result) {
    let qry='select * from board_info?id="'+req.query.id+'"';
    connection.query(qry, function (err, res) {
        if(err)
        console.error('에러입니다.')


        console.info('success', res)

        result.status(200).json({
            "result":res[0]
        })
    })
}


module.exports = {
    boardList: boardList,
    boardDetail: boardDetail,
}
