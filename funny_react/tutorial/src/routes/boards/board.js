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
            <div>
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
                                    <tr className="board" key={i} onClick={(e) =>this.goDetail(v.id)}>
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
                <button type="button" onClick={this.goInsert}>글쓰기 </button>
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

    goInsert = () => {
        
        this.props.history.replace('/boardAdd')
    }

    goDetail = (num) => {
        this.props.history.replace('/boardDetail?num='+num)
    }
}
export default board