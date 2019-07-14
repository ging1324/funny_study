import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { updateUserSns } from '../../connect/getUser';
import KakaoLogin from 'react-kakao-login';
import {GoogleLogin} from 'react-google-login';
class myPage extends Component {
    constructor(props){
        super(props);
        
    }

    render(){
        return (
            <Fragment>
                <KakaoButton
                jsKey="10b8a3e39ea26078e582d767275366c5"
                buttonText="kakao"
                onSuccess={this.resKakao}
                onFailure={this.resFail}
                getProfile="true"
                />
                <GoogleLogin
                clientId = '1028572689384-kq3n2vtj88451on6ct2lc8elcdn9ijlr.apps.googleusercontent.com'
                buttonText = '구글'
                onSuccess = {this.resGoogle}
                onFailure = {this.resFailGoogle}
                />
            </Fragment>
        )
    }

    resKakao = (res) => {
        console.info('kakao info : ', res)
        let data = {
            sns_key: res.profile.id,
            sns_type: 'kakao',
            uid: JSON.parse(localStorage.getItem('login_info')).uid
        }
        this.updateUserSns(data);
    }

    resFail = (res) => {
        console.info('fail', res)
    }

    resGoogle = (res) => {
        console.info('googleRes', res)
        let data = {
            sns_key: res.profileObj.googleId,
            sns_type: 'google',
            uid: JSON.parse(localStorage.getItem('login_info')).uid
        }
        this.updateUserSns(data);
    }

    updateUserSns = async(data) => {
        await updateUserSns(data).then((res) => {
            console.info('res', res);
        })
    }

}
const KakaoButton = KakaoLogin
export default myPage