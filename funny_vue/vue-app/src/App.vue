<template>
    <div id="app">
        {{loginName}}
        <br/>
        <router-link to="/home">홈 </router-link> 
        <router-link to="/login">로그인 </router-link> 
        <router-link to="/join">회원가입 </router-link> 
        <router-link to="/boardList">게시판 </router-link>
        <button v-if="loginStatus" @click="logout">
            로그아웃
        </button>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
  name: 'app',
  loginName:'',
  loginStatus:'',
  beforeMount() {
      let loginStatus = localStorage.getItem('is_login')
      if(loginStatus){
          this.loginStatus = loginStatus
          this.loginName = JSON.parse(localStorage.getItem('login_info')).user_name
      }
    // $el은 아직 사용할 수 없습니다.
  },
  methods:{
      logout(){
            localStorage.removeItem('is_login');
            localStorage.removeItem('login_info');
            this.loginName = ''
            this.loginStatus = '',
            alert('로그아웃 되었습니다.');
            this.$router.push('/');
        }
    }
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
