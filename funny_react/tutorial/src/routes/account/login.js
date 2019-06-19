import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { loginUser } from '../../connect/getUser';

class login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            is_login:false,
        }
    }

    render(){
        return (
            this.state.is_login ?
            <div>
            {
                this.state.is_login ? '로그인 되었습니다' : '로그인을 해주세요'
            }
            </div>
           
            :
            <form onSubmit={this.evtHandler}>
                <div>
                    <ul>
                        <li>아이디 : <input type="text" class="userId" name = "userId"/></li>
                    </ul>
                    <ul>
                        <li>비밀번호 : <input type="password" class="userPasswd" name="userPasswd"/></li>
                    </ul>
                </div>
                <button type="submit" >로그인 </button>
            </form>
        )
    }

    evtHandler = async(e) => {
        e.preventDefault();
        console.info('핸들러 동작', e.target.userId.value);
        console.info('핸들러 동작', e.target.userPasswd.value);
        await loginUser(e.target.userId.value, e.target.userPasswd.value).then((res) => {
            console.info('', res)
            if(res.data.result.status === 'success') {
                alert('로그인 되었습니다!');
                localStorage.setItem('is_login', true)
                localStorage.setItem('login_info', JSON.stringify(res.data.result))
                window.location.reload('/'); 

            }else{
                alert('잘못된 계정 정보 입니다');
            }

        })
    }
}
export default login