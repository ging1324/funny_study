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
            <table>
                <thead>
                    <tr>
                        <td>번호</td>
                        <td>제목</td>
                        <td>작성자</td>
                        <td>등록일</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.boardData.map((v, i)=>{
                            return (
                                <tr className="board" key={i}>
                                    <td className="board-num">{v.id}</td>
                                    <td className="board-title">{v.title}</td>
                                    <td className="board-author">{v.user_name}</td>
                                    <td className="board-date">{v.reg_date}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            
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