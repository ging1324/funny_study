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
          this.axios.get('http://localhost:3000/test')
          .then((res) => {
              this.getTest = res.data.result.user_name
            //   console.log('res', res)
          })
      }
  }
}
</script>