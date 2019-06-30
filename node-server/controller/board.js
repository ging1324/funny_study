var mysql_db = require('../db/mysql')();tion = mysql_db.init();
var connection = mysql_db.init();

/**
 * 게시판 전체 목록 조회
 * @type GET
 * @param {*} req 
 * @param {*} result 
 */
function boardList (req, res) {
    let pageNum = req.query.num ? req.query.num : 0
    let qry =   'SELECT  *, '
                +'       (SELECT COUNT(*) FROM board_info board left outer join user_info user on board.uid = user.uid) as totalNum '
                +'FROM  ('
                +'    SELECT  board.id'
                +'            ,board.uid'
                +'            ,user.user_name'
                +'            ,board.title'
                +'            ,board.content'
                +'            ,DATE_FORMAT(board.reg_date,"%Y-%m-%d") AS reg_date'
                +'      FROM  board_info board left outer join user_info user on board.uid = user.uid '
                +'ORDER BY board.id DESC '
                +') listData '
                +'LIMIT '+pageNum+', 10';
                console.info('data1', req.query);
                console.info('data2', req.query.num);
                console.info('pageNum', pageNum);
    connection.query(qry, function (err, result) {
        if(err)
        console.error('에러입니다.', err)


        console.info('success', req.pageNum)

        res.status(200).json({
            "result": {
                "boardList": result,
                "currentNum": pageNum+1,
            }
        })
    })
}

function boardTotNum (req, res) {
    let qry =   'SELECT  COUNT(*) AS totalNum '
            +   '  FROM  board_info board left outer join user_info user on board.uid = user.uid ';
    connection.query(qry, function(err, result) {
        if(err)
        console.info('에러입니다.')

        res.status(200).json({
            "result":result[0]
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

function boardUpdate(req, res){
    const board_info = req.body;
    let qry = 'update board_info set title = "'+board_info.title+'", content = "'+board_info.content+'"  where id = '+board_info.id;

    connection.query(qry, function (err, result) {

        console.info('res', res)
        console.info('result', result)

        res.status(200).json({
            "result":result
        })
    })
}

function boardDelete(req, res) {
    const id = req.query.id;
    let qry = 'delete from board_info where id = '+id;
    connection.query(qry, function (err, result){
        res.status(200).json({
            "result": result
        })
    })
}


module.exports = {
    boardList: boardList,
    boardDetail: boardDetail,
    boardAdd: boardAdd,
    boardUpdate: boardUpdate,
    boardDelete: boardDelete,
    boardTotNum: boardTotNum
}
