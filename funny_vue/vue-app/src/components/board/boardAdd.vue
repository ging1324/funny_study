<template>
    <div>
        <ul>
            <li>제목 : <input type="text" class="title" name="title" v-model="boardTitle" /></li>
        </ul>
        <ul>
            <textarea id="content" name="content" value="content"  v-model="content"></textarea>
        </ul>
        
        <button type="submit" @click="addBoard">저장 </button>
    </div>
</template>
<style src="../../assets/board/board.css"></style>
<script>
export default {
    data(){
        return {
            boardTitle: '',
            content: ''
        }
    },
    methods:{
        addBoard(){
            let board_info = {
                'user_id': JSON.parse(localStorage.getItem('login_info')).uid,
                'title': this.boardTitle,
                'content': this.content
            }
            this.axios.post('http://ec2-54-180-31-0.ap-northeast-2.compute.amazonaws.com:3005/study/boardAdd', board_info).then((res) => {
                if(res.status === 200) {
                    alert('새 글이 등록 되었습니다.');
                    this.$router.push('/boardList');
                }
            })
        },
        
    }

}
</script>