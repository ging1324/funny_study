import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    constructor(props){
        super(props)
        this.state = {
            user_name : '',
            is_login : false
        }

    }


    render(){
        return (
            
            <div>
                {
                    this.state.is_login === true && <span>{this.state.user_name} 님 환영합니다.</span>
                }
                <div>
                    <Link to="/" > 홈 </Link>
                    <Link to="/login" > 로그인 </Link>
                    <Link to="/join" > 회원가입 </Link>
                    <Link to="/board" > 게시판 </Link>
                </div>
            </div>
        )
    }

    componentDidMount = () => {
        let isLogin = localStorage.getItem('is_login')
        console.info('login check',isLogin )
        console.info('login check',JSON.parse(localStorage.getItem('login_info')).user_name )
        if(isLogin){
            this.setState({
                ...this.state,
                is_login : true,
                user_name : JSON.parse(localStorage.getItem('login_info')).user_name

            })
        }
    }

}
export default Header