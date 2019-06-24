var mysql_db = require('../db/mysql')();tion = mysql_db.init();
var connection = mysql_db.init();

/**
 * 게시판 전체 목록 조회
 * @type GET
 * @param {*} req 
 * @param {*} result 
 */
function boardList (req, res) {
    let qry = 'select  board.id,board.uid,user.user_name,board.title,board.content,date_format(board.reg_date,"%Y-%m-%d") as reg_date from  board_info board left outer join user_info user on board.uid = user.uid order by board.id desc';
    connection.query(qry, function (err, result) {
        if(err)
        console.error('에러입니다.')


        console.info('success', result)

        res.status(200).json({
            "result":result
        })
    })
}

function boardDetail (req, res) {
    let qry = 'select  ('
                    + 'select  user_data.user_id '
                    +   'from  user_info user_data '
                    +  'where  user_data.uid = board.uid'
                    +') as author,'
                    +' board.uid,'
                    +' board.title,'
                    +' board.content,'
                    +' date_format(board.reg_date, "%Y-%m-%d %h:%i:%s") AS reg_date'
                    +' from board_info board'
                    +' where board.id = '+req.query.id;
    connection.query(qry, function (err, result) {
        if(err)
        console.error('에러입니다.')


        console.info('success', result)

        res.status(200).json({
            "result":result[0]
        })
    })
}
function boardAdd ( req, res ) {
    const board_info = req.body;
    let qry = 'insert into board_info(uid, title, content) values(?,?,?)'
    let param = [board_info.user_id, board_info.title, board_info.content ]
    connection.query(qry, param, function (err, result) {
        console.info('err', err);
        console.info('result', result);
        res.status(200).json({
            "result": result
        })
    }) 
}


module.exports = {
    boardList: boardList,
    boardDetail: boardDetail,
    boardAdd: boardAdd,
}
