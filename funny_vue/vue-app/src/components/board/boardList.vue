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
        <!-- 페이징 시작 -->
        <div>
                <ul className="pagingArea">
                    <a v-if="firstFlag === true" href="javascript:;" @click="goPaging('first')"> [처음] </a>
                    <a v-if="prevFlag === true" href="javascript:;" @click="goPaging('prev')"> [이전] </a>
                    <li v-for="(v,i) in numberArr"
                    v-bind:key="v"
                    v-bind:item="v"
                    v-bind:index="i"
                    style="display:inline-block">
                        <a v-if="Number(currentNum) !== v" href="javascript:;" @click="goPaging(v)">[{{v}}] </a> 
                        <span v-if="Number(currentNum) === v">[{{v}}] </span> 
                    </li>
                    <a v-if="nextFlag === true" href="javascript:;" @click="goPaging('next')"> [다음] </a>
                    <a v-if="lastFlag === true" href="javascript:;" @click="goPaging('last')"> [끝] </a>
                </ul>
            </div>
        <!-- 페이징 끝 -->
        <button type="button" @click="addBoard">글쓰기 </button>
    </div>
</template>
<style src="../../assets/board/board.css"></style>
<script>
export default {
    beforeMount(){
        this.getTotalNum();
    },
    mounted(){
        this.getList();
        this.pagingMaker();

    },
    data(){
        return {
            boardList:[],
            currentNum: this.$route.query.currentNum ? this.$route.query.currentNum : 1,
            totalNum: 0,
            numberArr: [1],
            firstFlag:false,
            lastFlag:false,
            lastNum:0,
            prevFlag:false,
            nextFlag:false
        }
    },
    methods:{
        getList(){
            // console.log(currentNum)
            
            let num = (this.currentNum -1) * 10;


            this.axios.get('http://ec2-54-180-31-0.ap-northeast-2.compute.amazonaws.com:3005/study/boardList?num='+num)
            .then((res) => {
                if(res.status === 200){
                    // console.info(' vue data : ', res)
                    this.boardList = res.data.result.boardList
                }
            })
        },
        addBoard(){
            this.$router.push('/boardAdd');
        },
        goDetail(e){
            // console.log('eeeeee', e);
        },
        getTotalNum(){
            this.axios.get('http://ec2-54-180-31-0.ap-northeast-2.compute.amazonaws.com:3005/study/boardTotNum').then((res1) => {
                if(res1.status === 200){
                    // console.info('data : ', res1)
                    this.totalNum = res1.data.result.totalNum;


                    // 전체 컨텐츠 수
                    let totalNum = res1.data.result.totalNum;
                    // 전체컨텐츠를 10으로 나눈 값
                    let pagingNumList = Math.floor(totalNum / 10)+1;
                    
                    this.lastNum = pagingNumList
                    
                    
                    // 페이징 번호를 담고 있을 변수 생성
                    let arrPagingNum = []

                    // 선택된 페이징의 번호가 10 이하일 경우
                    if(this.currentNum <= 10){
                        // 전체 컨텐츠를 10으로 나눈 값이 10이 넘을때(마지막 페이지 번호가 11 이상일때)
                        if(pagingNumList > 10){
                            this.lastFlag = true;
                            this.nextFlag = true;
                            for(let i = 1; i <= 10; i++){
                                arrPagingNum.push(i);
                            }
                        }
                        // 전체 컨텐츠를 10으로 나눈 값이 10이 넘지 않을때(마지막 페이지 번호가 1~10 일때)
                        else{
                            for(let i = 1; i <= pagingNumList; i++){
                                arrPagingNum.push(i);
                            }
                            // 컨텐츠가 10개 이하이면 반복문에 값이 들어가지 않아 변수 길이를 체크하여 0이면 강제로 1을 넣는다
                            if(arrPagingNum.length === 0)
                            arrPagingNum.push(1);
                        }
                    }
                    // 선택된 페이징의 번호가 10 이상일 경우
                    else if(this.currentNum > 10){
                        // 반복문의 시작점 계산
                        let startNum = this.currentNum - (this.currentNum % 10) + 1;
                        // 반복문의 마지막 번호 계산
                        let lastNum = startNum + 9

                        // 선택된 번호가 0으로 딱 떨어질 경우 해당 그룹의 마지막 번호이니 해단 변수 -9를 시작으로 해당 변수를 마지막 번호로 한다
                        if(this.currentNum % 10 === 0){
                            startNum = this.currentNum-9;
                            lastNum = this.currentNum;
                        }

                        // 페이징 마지막 노출 번호가 lastNum 보다 작거나 같으면
                        if(pagingNumList <= lastNum){
                            for(let i = startNum; i <= pagingNumList; i++){
                                arrPagingNum.push(i);
                            }
                        }
                        // 페이징 마지막 노출 번호가 lstNum보다 크면 startNum에 9를 더해서 노출한다.
                        else{
                            for(let i = startNum; i <= startNum+9; i++){
                                arrPagingNum.push(i);
                            }
                            this.lastFlag = true;
                            this.nextFlag = true;
                        }
                        this.lastFlag = true;
                        this.nextFlag = true;

                        if(pagingNumList === lastNum){
                            this.lastFlag = true;
                            this.nextFlag = true;
                        }
                        
                    }
                    this.numberArr = arrPagingNum
                }
            })
        },
        pagingMaker(){
            
        },
        goPaging(v){
            
            this.$router.push('/boardList?currentNum='+v);
            
        }
    },
    created() {
    }

}
</script>