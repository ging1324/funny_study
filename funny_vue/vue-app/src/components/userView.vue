<template>
    <div>
        <span>{{getTest}}</span>
        <button @click="changeValue">호출</button>
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
          getTest:'11'
      }
  },
  methods:{
      changeValue(){
          this.axios.get('http://ec2-54-180-31-0.ap-northeast-2.compute.amazonaws.com:3005/study/test')
          .then((res) => {
              this.getTest = res.data.result.user_name
            //   console.log('res', res)
          })
      }
  }
}
</script>