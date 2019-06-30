import React, { Component } from 'react';
import '../../style/board.css';
import {boardInsert} from '../../connect/boardConn';
import CKEditor from 'ckeditor4-react';

class boardAdd extends Component {
    constructor(porps){
        super(porps);
        this.state = {
            editorData:''
        }
    } 

    render(){ 
        return (
            <form onSubmit={this.evtHandler}>
                <div>
                    <ul>
                        <li>제목 : <input type="text" class="title" name="title"/></li>
                    </ul>
                    <ul>
                        <CKEditor 
                            data=""
                            onChange={this.editorChange}
                        />
                    </ul>
                    <input type="hidden" class="content" name = "content" />
                    
                    <button type="submit" >저장 </button>
                </div>
            </form>
        )
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
            "user_id":JSON.parse(localStorage.getItem('login_info')).uid,
            "title":e.target.title.value, 
	        "content":this.state.editorData,
        }
        
        await boardInsert(boardData).then((res) => {
            console.info('결과 : ', res);
            // if(res.status === 200){
                alert('새 글이 등록 되었습니다.');
                this.props.history.replace('/board')
            // }

        })
    }
    
}
export default boardAdd