import React, { Component } from 'react';
import './pagination.css';
import { boardTotNum} from '../../connect/boardConn';

class pagination extends Component {
    constructor(props){
        super(props)
        this.state = {
            currentNum: this.props.currentNum ? this.props.currentNum : 1,
            totalNum: 0,
            numberArr: [1,2,3,4,5,6,7,8,9,10],
            firstFlag:false,
            lastFlag:false,
            lastNum:0,
            prevFlag:false,
            nextFlag:false
        }
    }
    render(){
        return (
            <div>
                <ul className="pagingArea">
                    {
                        this.state.firstFlag && <a href="javascript:;" onClick={(e) => this.goPaging('first')}> [처음] </a>
                    }
                    {
                        this.state.prevFlag && <a href="javascript:;" onClick={(e) => this.goPaging('prev')}> [이전] </a>
                    }
                    {
                        this.state.numberArr.map((v,i) => {
                            return (
                                <li key={i} >
                                    
                                    {
                                        Number(this.state.currentNum) !== v 
                                        ? <a href="javascript:;" onClick={(e) => this.goPaging(v)}>{'['+v+']'} </a> 
                                        : ' ['+v+'] '
                                    }
                                    
                                </li>
                            )
                        })
                    }

                    {
                        this.state.nextFlag && <a href="javascript:;" onClick={(e) => this.goPaging('next')}> [다음] </a>
                    }
                    
                    {
                        this.state.lastFlag && <a href="javascript:;" onClick={(e) => this.goPaging('last')}> [끝] </a>
                    }
                </ul>
            </div>
        );
    }

    componentDidMount(){
        console.info('currentNum', this.props.totalNum)
        this.pagingMaker();
    }

    goPaging = (selectNum) => {
        console.info('선택된 번호는', selectNum)
        if(selectNum === 'first'){
            selectNum = 1;
        }
        else if(selectNum === 'last'){
            selectNum = this.state.lastNum;
            
        }
        else if(selectNum === 'prev'){
            if( this.state.currentNum > 10 && this.state.currentNum%10 === 0){
                selectNum = Math.floor((this.state.currentNum-1)/10)*10-9;
            }else{
                selectNum = Math.floor(this.state.currentNum/10)*10-9;

            }
        }
        else if(selectNum === 'next'){
            if( this.state.currentNum > 10 && this.state.currentNum%10 === 0){
                selectNum = Math.floor((this.state.currentNum-1)/10)*10+11;
            }else{
                selectNum = (Math.floor(this.state.currentNum/10)*10+1)+10;
            }
            
            if(selectNum === 1){
                selectNum = 11;
            }
        }
        window.location.replace('/board?currentNum='+selectNum)
    }

    pagingMaker = async() => {
        await boardTotNum().then((res) => {
            if(res !== undefined){
                console.info('totalNum', res.data.result.totalNum)

                // 전체 컨텐츠 수
                let totalNum = res.data.result.totalNum;
                // 전체컨텐츠를 10으로 나눈 값
                let pagingNumList = Math.floor(totalNum / 10)+1;
                
                this.setState({
                    lastNum : pagingNumList
                })
                
                // 페이징 번호를 담고 있을 변수 생성
                let arrPagingNum = []

                // 선택된 페이징의 번호가 10 이하일 경우
                if(this.state.currentNum <= 10){
                    // 전체 컨텐츠를 10으로 나눈 값이 10이 넘을때(마지막 페이지 번호가 11 이상일때)
                    if(pagingNumList > 10){
                        this.setState({
                            lastFlag: true,
                            nextFlag: true
                        })
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
                else if(this.state.currentNum > 10){
                    console.info('>>>', this.state.currentNum)
                    // 반복문의 시작점 계산
                    let startNum = this.state.currentNum - (this.state.currentNum % 10) + 1;
                    // 반복문의 마지막 번호 계산
                    let lastNum = startNum + 9

                    // 선택된 번호가 0으로 딱 떨어질 경우 해당 그룹의 마지막 번호이니 해단 변수 -9를 시작으로 해당 변수를 마지막 번호로 한다
                    if(this.state.currentNum % 10 === 0){
                        startNum = this.state.currentNum-9;
                        lastNum = this.state.currentNum;
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
                        this.setState({
                            lastFlag: true,
                            nextFlag: true
                        })
                    }
                    this.setState({
                        firstFlag: true,
                        prevFlag: true,
                        // nextFlag: true
                    })

                    if(pagingNumList === lastNum){
                        
                        this.setState({
                            lastFlag: false,
                            nextFlag: false
                        })
                    }
                    
                }
                this.setState({
                    numberArr : arrPagingNum
                })
            }
        })
    }


} export default pagination