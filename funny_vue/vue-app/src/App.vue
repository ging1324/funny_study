<template>
    <div id="app">
        <header class="header">
            <nav class="navigation">
                <router-link to="/home">홈 </router-link> 
                <router-link to="/login">로그인 </router-link> 
                <router-link to="/join">회원가입 </router-link> 
                <router-link to="/boardList">게시판 </router-link>
            </nav>
            <div class="user">
                <p>{{ loginName }}</p>
                <button v-if="loginStatus" @click="logout">
                    로그아웃
                </button>
            </div>
        </header>
        <router-view class="view"></router-view>
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
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body{
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
ul, ol{
    list-style: none;
}
button, a{
    all: unset
}
button, a{
    cursor: pointer;
}
button{
    padding: .3rem 1rem !important;
    border-radius: 7px;
    border: 1px solid dodgerblue;
    background: #fff;
    color: dodgerblue;
    font-weight: 700;
}
.router-link-exact-active{
    font-weight: bold;
}

.header,
.header .navigation,
.header .user{
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.header{
    padding: .5rem 0;
    background: dodgerblue;
    color: #fff;
    /* font-weight: 700; */
}
.header .navigation > *,
.header .user > *{
    margin: 0 1rem;
}
.header button{
    all: unset;
}
.header + .view{
    padding: 1rem;
}
</style>
