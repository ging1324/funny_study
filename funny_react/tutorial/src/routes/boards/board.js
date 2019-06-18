import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../style/board.css';

import {boardConn} from '../../connect/boardConn';
class board extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            boardData:[]
        }
    }
    render(){
        return (
            <div className="board-wraper">
                <ul className="board">
                    <li className="board-header board-num">번호</li>
                    <li className="board-header board-title">제목</li>
                    <li className="board-header board-author">작성자</li>
                    <li className="board-header board-date">등록일</li>
                </ul>
                {
                    this.state.boardData.map((v, i)=>{
                        return (
                            <ul className="board" key={i}>
                                <li className="board-num">{v.id}</li>
                                <li className="board-title">{v.title}</li>
                                <li className="board-author">{v.user_name}</li>
                                <li className="board-date">{v.reg_date}</li>
                            </ul>
                        )
                    })
                }
                게시판 입니다!!!
            </div>
        )
    }

    componentDidMount(){
        this.getBoardList();
    }

    getBoardList = async() => {
        await boardConn().then((res) => {
            console.info('res >>>>>>>>>>>>>>>>>', res.data.result);
            this.setState({
                ...this.state,
                boardData:res.data.result
            })

        })

    }
}
export default board