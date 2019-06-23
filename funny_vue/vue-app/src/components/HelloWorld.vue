<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <span>{{textData}}</span>
    <br/>
    <!-- <button @click="changeValue">변경</button>
    <button @click="defaultValue">초기화</button> -->
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },

  data(){
      return {
          textData:'HelloWorld.vue 의 내용 입니다.'
      }
  },
  methods:{
      changeValue(){
          this.textData = '132123123213';
      },
      defaultValue(){
          this.textData = 'data111'
      }
  },
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
