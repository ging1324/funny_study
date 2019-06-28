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
                    <Link to="/gallery" > 갤러리 </Link>
                    {/* <Link to="/bookingList" > 예약 </Link> */}
                    
                    { this.state.is_login && <span onClick={this.logout}>로그아웃</span> }
                </div>
            </div>
        )
    }

    componentDidMount = () => {
        let isLogin = localStorage.getItem('is_login')
        if(isLogin){
            this.setState({
                ...this.state,
                is_login : true,
                user_name : JSON.parse(localStorage.getItem('login_info')).user_name

            })
        }
    }
    logout = () => {
        
        localStorage.removeItem('is_login')
        localStorage.removeItem('login_info')
        this.setState({
            ...this.state,
            is_login : false,
            user_name : ''

        })
        window.location.reload('/'); 
    }

}
export default Header