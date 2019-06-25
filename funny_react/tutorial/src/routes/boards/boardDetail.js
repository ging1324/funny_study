import React, { Component } from 'react';
import '../../style/board.css';
import {getBoardDetail, boardDelete} from '../../connect/boardConn';
import qs from "query-string";

class boardDetail extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            boardData: {
                author:'',
                title:'',
                reg_date:'',
                content:'',
            }
        }
    }
    render(){
        return (
            <div class="board-detail">
                <ul class="board-head">
                    <li class="author">{this.state.boardData.author}</li>
                    <li class="title">{this.state.boardData.title}</li>
                    <li class="reg-date">{this.state.boardData.reg_date}</li>
                </ul>
                <ul class="board-body">
                    <li dangerouslySetInnerHTML={{__html: this.state.boardData.content}}></li>
                </ul>
                <div class="btn-area">
                    <button class="list-btn" type="button" onClick={this.goList}>목록</button>
                    <button class="update-btn" type="button" onClick={this.goUpdate}>수정하기</button>
                    <button class="delete-btn" type="button" onClick={this.deleteData}>삭제</button>
                </div>
            </div>

        )
    }

    componentDidMount = () => {
        console.info('test!!!');
        this.getData();
    }

    getData = async() => {
        let params = qs.parse(this.props.location.search);
        console.info('params ::::::::::: ', params);
        await getBoardDetail(params.num).then((res) => {
            console.info('res', res);
            this.setState({
                ...this.state,
                boardData:res.data.result
            })
        })
    }

    goList = () => {
        this.props.history.push('/board')
    }

    goUpdate = () => {
        let params = qs.parse(this.props.location.search);
        this.props.history.push('/boardUpdate?id='+params.num)
    }

    deleteData = async() => {
        let params = qs.parse(this.props.location.search);
        await boardDelete(params.num).then((res) => {
            
            if(res.status === 200){
                alert('삭제 되었습니다.');
                this.props.history.replace('/board')
            }
        })

    }

}export default boardDetail