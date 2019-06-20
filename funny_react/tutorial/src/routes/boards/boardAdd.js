import React, { Component } from 'react';
import '../../style/board.css';
import {boardInsert} from '../../connect/boardConn';

class boardAdd extends Component {
    render(){
        return (
            <form onSubmit={this.evtHandler}>
                <div>
                    <ul>
                        <li>제목 : <input type="text" class="title" name="title"/></li>
                    </ul>
                    <ul>
                        <li>내용 : <textarea class="content" name = "content"></textarea></li>
                    </ul>
                    
                    <button type="submit" >저장 </button>
                </div>
            </form>
        )
    }

    evtHandler = async(e) => {
        e.preventDefault();
        console.info('핸들러 동작', e.target.title.value);
        console.info('핸들러 동작', e.target.content.value);
        let boardData = {
            "user_id":JSON.parse(localStorage.getItem('login_info')).uid,
            "title":e.target.title.value, 
	        "content":e.target.content.value,
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