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
    </div>
</template>
<script>
export default {
  data(){
      return {
          uid:'',
          upwd:''
      }
  },
  methods:{
      login(){
          this.axios.get('http://ec2-54-180-31-0.ap-northeast-2.compute.amazonaws.com:3005/study/login?user_id='+this.uid+'&user_passwd='+this.upwd)
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
  }
}
</script>