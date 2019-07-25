<template>
    <div>
        <ul>
            <div>
                <span>아이디</span>
                <input type="text" v-model="uid"/>
            </div>
            <div>
                <span>비밀번호</span>
                <input type="password" v-model="upwd"/>
            </div>
            <button @click="login">로그인</button>
        </ul>
        <KakaoLogin
        api-key="10b8a3e39ea26078e582d767275366c5"
        image="kakao_login_btn_small"
        :on-success=successKakao
        :on-failure=failSns
        />
        <GoogleLogin 
        :params="params"
        :onSuccess=successGoogle
        :onFailure=failSns
        :renderParams="renderParams">login</GoogleLogin>
    </div>
</template>
<script>
import KakaoLogin from 'vue-kakao-login'
import GoogleLogin from 'vue-google-login'
// let onSuccess = (data) => {
//   console.log(data)
//   console.log("success")
// }
// let onFailure = (data) => {
//   console.log(data)
//   console.log("failure")
// }
export default {
    components: {
    KakaoLogin,
    GoogleLogin
  },
  data(){
      return {
          uid:'',
          upwd:'',
          params:{
              client_id: '1028572689384-kq3n2vtj88451on6ct2lc8elcdn9ijlr.apps.googleusercontent.com',
              scope: 'profile'
          },
          renderParams: {
                    width: 250,
                    height: 50,
                    longtitle: true
                }
      }
  },
  methods:{
      login(){
          this.axios.get('http://ec2-54-180-31-0.ap-northeast-2.compute.amazonaws.com:3005/study/login?user_id='+this.uid+'&user_passwd='+this.upwd)
          .then((res) => {
            //   this.getTest = res.data.result.user_name
            //   console.log('res', res)
            // TODO: 비밀번호 일치할 때만 로그인 성공
            if(res.status === 200){
                alert('로그인에 성공하였습니다!!')
                localStorage.setItem('is_login', true)
                localStorage.setItem('login_info', JSON.stringify(res.data.result))
                this.$router.push('/');
            }
          })
      },
      async successKakao(data){
          console.info('kakao------------------', data);
        const userInfo = await this.axios({
            methods: 'get',
            url: 'https://kapi.kakao.com/v2/user/me',
            headers: {
                'Conetne-type': 'application/x-www-form-urlencoded;charset=utf-8',
                'Authorization': 'Bearer '+ data.access_token
            }
        })
        console.log(userInfo);
        this.reqUserLoginForSns('kakao', userInfo.data.id)

      },
      failSns(data){
          console.info('failSns-------------------', data);
      },
      successGoogle(data){
          console.info('google------------------', data);
      },
      reqUserLoginForSns(type, key){
          this.axios.get('http://ec2-54-180-31-0.ap-northeast-2.compute.amazonaws.com:3005/study/loginForSns?sns_type='+type+'&sns_key='+key)
          .then((res) => {
            //   this.getTest = res.data.result.user_name
            //   console.log('res', res)
            if(res.status === 200){
                alert('로그인에 성공하였습니다!!')
                localStorage.setItem('is_login', true)
                localStorage.setItem('login_info', JSON.stringify(res.data.result))
                this.$router.push('/');
            }
          })
      }
        // onSuccess,
        // onFailure
  }
}
</script>