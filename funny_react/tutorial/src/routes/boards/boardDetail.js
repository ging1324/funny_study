import React, { Component } from 'react';
import '../../style/board.css';
import {getBoardDetail} from '../../connect/boardConn';
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
        console.info('testq11111')
        this.props.history.replace('/board')
    }

}export default boardDetail