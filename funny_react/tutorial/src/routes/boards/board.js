import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../style/board.css';

import {boardConn, boardTotNum} from '../../connect/boardConn';
import Pagination from '../common/pagination';
import qs from "query-string";


class board extends Component {
    constructor(props){
        super(props);

        
        
        this.state = {
            boardData:[],
            currentNum:qs.parse(this.props.location.search).currentNum?qs.parse(this.props.location.search).currentNum:1,
            totalNum:0

        }
    }
    render(){
        const props = {
            totalNum: this.getBoardListTotCnt,
            currentNum:this.state.currentNum}
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
                            this.state.boardData &&
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
                
                <Pagination {...props}/>
                <button type="button" onClick={this.goInsert}>글쓰기 </button>
            </div>
        )
    }

    componentDidMount(){
        // this.getBoardList();
        // this.getBoardListTotCnt();
    }

    componentWillMount(){
        
        this.getBoardList();
        this.getBoardListTotCnt();
    }

    getBoardList = async() => {
        let num = (this.state.currentNum -1) * 10;
        console.info('num', num)
        await boardConn(num).then((res) => {
            if(res !== undefined) {
                this.setState({
                    ...this.state,
                    boardData: res.data.result.boardList,
                    currentNum: res.data.result.currentNum
                })

            }

        })
    }

    getBoardListTotCnt = async() => {
        await boardTotNum().then((res) => {
            if(res !== undefined){
                this.setState({
                    totalNum: res.data.result.totalNum
                })
                return res.data.result.totalNum
            }
            
        })
    }

    goInsert = () => {
        this.props.history.push('/boardAdd')
    }

    goDetail = (num) => {
        this.props.history.push('/boardDetail?num='+num)
    }
}
export default board