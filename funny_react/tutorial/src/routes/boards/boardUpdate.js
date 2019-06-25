import React, { Component } from 'react';
import '../../style/board.css';
import {boardUpdateData, getBoardDetail} from '../../connect/boardConn';
import CKEditor from 'ckeditor4-react';
import qs from "query-string";

class boardUpdate extends Component{ 
    constructor(porps){
        super(porps);
        this.state = {
            editorData:'',
            id: 0,
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
            <form onSubmit={this.evtHandler}>
                <div>
                    <ul>
                        <li>제목 : <input type="text" class="title" name="title" defaultValue={this.state.boardData.title}/></li>
                    </ul>
                    <ul>
                        <CKEditor 
                            data={this.state.boardData.content}
                            onChange={this.editorChange}
                        />
                    </ul>
                    <input type="hidden" class="content" name = "content" />
                    
                    <button type="submit" >저장 </button>
                </div>
            </form>
        )
    }

    componentDidMount(){
        
        let params = qs.parse(this.props.location.search);
        this.setState({
            id: params.id
        })
        this.getData(params.id);


        console.info('id :::::::::::: ', this.state.id)
        console.info('id ::::::::::::2 ', params.id)
    }

    getData = async(id) => {
        await getBoardDetail(id).then((res) => {
            console.info('res', res);
            this.setState({
                ...this.state,
                boardData:res.data.result
            })
        })
    }

    editorChange = (evt) => {
        console.info('editor', evt.editor.getData());
        this.setState({
            editorData:evt.editor.getData()
        })
    }

    evtHandler = async(e) => {
        e.preventDefault();
        console.info('핸들러 동작', e.target.cke_editor1);
        let boardData = {
            "id":Number(this.state.id),
            "title":e.target.title.value, 
	        "content":this.state.editorData,
        }
        
        await boardUpdateData(boardData).then((res) => {
            console.info('결과 : ', res);
            if(res.status === 200){
                alert('업데이트 되었습니다.');
                this.props.history.replace('/board')
            }

        })
    }

} 
export default boardUpdate