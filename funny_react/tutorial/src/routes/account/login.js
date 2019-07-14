import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { loginUser, loginForSns } from '../../connect/getUser';
import KakaoLogin from 'react-kakao-login';
import {GoogleLogin} from 'react-google-login';
import styled from 'styled-components'
class login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            is_login:false,
            id:'',
            name:'',
            provider:''
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
            
            <Fragment>
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
                <KakaoButton
                jsKey="10b8a3e39ea26078e582d767275366c5"
                buttonText="로그인용 kakao"
                onSuccess={this.resKakao}
                onFailure={this.resFail}
                getProfile="true"
                />
                <GoogleLogin
                clientId = '1028572689384-kq3n2vtj88451on6ct2lc8elcdn9ijlr.apps.googleusercontent.com'
                buttonText = '로그인용 구글'
                onSuccess = {this.resGoogle}
                onFailure = {this.resFailGoogle}
                />
            </Fragment>
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
    resKakao = (res) => {
        console.info('kakao info : ', res.profile.id)
        this.reqUserLoginForSns('kakao', res.profile.id)
    }

    resFail = (res) => {
        console.info('fail', res)
    }

    resGoogle = (res) => {
        console.info('googleRes', res.profileObj.googleId)
        this.reqUserLoginForSns('google', res.profileObj.googleId)

    }

    resFailGoogle = (res) => {
        console.info('googleRes fail')

    }

    reqUserLoginForSns = async(type, key) => {
        await loginForSns(type, key).then((res) => {
            console.info('sns login  : ', res)
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
const KakaoButton = styled(KakaoLogin) `
padding:0;
width:190px;
`
export default login