import React, { Component } from 'react';

import {joinUser} from '../../connect/getUser'

class join extends Component {
    constructor(props){
        super(props);
        this.state = {
    
        }
    }

    render(){
        return(
            <form onSubmit={this.evtHandler}>
            <div>
                <ul>
                    <li>이름 : <input type="text" class="userName" name="userName"/></li>
                </ul>
                <ul>
                    <li>아이디 : <input type="text" class="userId" name = "userId"/></li>
                </ul>
                <ul>
                    <li>비밀번호 : <input type="password" class="userPasswd" name="userPasswd"/></li>
                </ul>
                <ul>
                    <li>주소 : <input type="text" class="userAddress" name="userAddress" /></li>
                </ul>
                <ul>
                    <li>생년월일 : <input type="text" class="userBirthday" name="userBirthday"/></li>
                </ul>
                <ul>
                    <li>성별 : 
                        <input type="radio" class="userSex" name="userSex" value="m" />남
                        <input type="radio" class="userSex" name="userSex" value="f" />여
                    </li>
                </ul>
                <button type="submit" >가입하기 </button>
            </div>
            </form>
        )
    }

    join = async() => {
        await joinUser().then((res) => {

        })
    }

    evtHandler = async(e) => {
        e.preventDefault();
        console.info('핸들러 동작', e.target.userName.value);
        console.info('핸들러 동작', e.target.userId.value);
        console.info('핸들러 동작', e.target.userPasswd.value);
        console.info('핸들러 동작', e.target.userAddress.value);
        console.info('핸들러 동작', e.target.userBirthday.value);
        console.info('핸들러 동작', e.target.userSex.value);
        let userData = {
            "user_id":e.target.userId.value, 
	        "user_passwd":e.target.userPasswd.value,
	        "user_name":e.target.userName.value,
	        "user_address":e.target.userAddress.value,
	        "user_birthday":e.target.userBirthday.value,
	        "user_sex":e.target.userSex.value
        }
        
        await joinUser(userData).then((res) => {
            console.info('결과 : ', res);
            if(res.status === 200){
                alert('회원가입에 성공하였습니다.');
                this.props.history.replace('/main')
            }

        })
    }

}
export default join 