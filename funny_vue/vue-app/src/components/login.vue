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
          this.axios.get('http://localhost:3000/login?user_id='+this.uid+'&user_passwd='+this.upwd)
          .then((res) => {
              this.getTest = res.data.result.user_name
            //   console.log('res', res)
          })
      }
  }
}
</script>