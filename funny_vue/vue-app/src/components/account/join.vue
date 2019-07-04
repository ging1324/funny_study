<template>
    <div>
        <ul>
            <div>
                <span>아이디 : </span>
                <input type="text" v-model="userId"/>
            </div>
            <div>
                <span>비밀번호 : </span>
                <input type="text" v-model="userPasswd"/>
            </div>
            <div>
                <span>이름 : </span>
                <input type="text" v-model="userName"/>
            </div>
            <div>
                <span>주소 : </span>
                <input type="text" v-model="userAddress"/>
            </div>
            <div>
                <li>성별 : 
                    <input type="radio" class="userSex" name="userSex" value="m" v-model="userSex" />남
                    <input type="radio" class="userSex" name="userSex" value="f" v-model="userSex" />여
                </li>
            </div>
            <div>
                <span>생년월일 : </span>
                <input type="text" v-model="userBirthday"/>
            </div>
            <button @click="joinUser">회원가입</button>
        </ul>
    </div>
</template>
<script>
export default {
  data(){
      return {
          userId:'',
          userPasswd:'',
          userName:'',
          userAddress:'',
          userSex:'',
          userBirthday:''
      }
  },
  methods:{
        joinUser(){
            let user_info = {
                'user_id': this.userId,
                'user_passwd': this.userPasswd,
                'user_name': this.userName,
                'user_address': this.userAddress,
                'user_birthday':this.userBirthday,
                'user_sex': this.userSex
            }

            this.axios.post('http://ec2-54-180-31-0.ap-northeast-2.compute.amazonaws.com:3005/study/addUser', user_info
            )
            .then((res) => {
              if(res.status === 200 ){
                  alert('회원가입에 성공하였습니다.')
                  this.$router.push('/login');
              }
            })
        }
  }
}
</script>