<template>
    <div>
        <table>
            <thead>
                <tr>
                    <td>번호</td>
                    <td>제목</td>
                    <td>작성자</td>
                    <td>등록일</td>
                </tr>
            </thead>
            <tbody>
                <tr className="board" 
                    v-for="(item, index) in boardList" 
                    v-bind:key="item.id"
                    v-bind:item="item"
                    v-bind:index="index">
                    <td className="board-num">{{index+1}}</td>
                    <td className="board-title"><a hraf="#null" 
                    @click="goDetail(item.id)">{{item.title}}</a></td>
                    <td className="board-author">{{item.user_name}}</td>
                    <td className="board-date">{{item.reg_date}}</td>
                </tr>
                        
            </tbody>
        </table>
        <button type="button" @click="addBoard">글쓰기 </button>
    </div>
</template>
<style src="../../assets/board/board.css"></style>
<script>
export default {
    mounted(){
        this.getList();

    },
    data(){
        return {
            boardList:[],
        }
    },
    methods:{
        getList(){
            this.axios.get('http://localhost:3000/boardList')
            .then((res) => {
                if(res.status === 200){
                    this.boardList = res.data.result
                }
            })
        },
        addBoard(){
            this.$router.push('/boardAdd');
        },
        goDetail(e){
            console.log('eeeeee', e);
        }
    },
    created() {
    }

}
</script>