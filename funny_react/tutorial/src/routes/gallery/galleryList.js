import React, { Component } from 'react';
import { Link,Route } from 'react-router-dom'
import GalleryUpload from './galleryUpload'
import GalleryView from './galleryView'

// 이미지 경로는 ./를 기준으로 public에 설정되어 있음!  public에 image 폴더 넣기 (Vue 는 asset)
 
const photos = [
    {
        title : 'pic1',
        pimages : './image/a1.jpg'
    },
    {
        title : 'pic2',
        pimages : './image/a2.jpg'
    },
    {
        title : 'pic3',
        pimages : './image/a3.jpg'
    },
    {
        title : 'pic4',
        pimages : './image/a4.jpg'
    },
    {
        title : 'pic3',
        pimages : './image/a3.jpg'
    },
    {
        title : 'pic2',
        pimages : './image/a2.jpg'
    },
    {
        title : 'pic1',
        pimages : './image/a1.jpg'
    },
    {
        title : 'pic4',
        pimages : './image/a4.jpg'
    },
    {
        title : 'pic4',
        pimages : './image/a4.jpg'
    },
    {
        title : 'pic1',
        pimages : './image/a1.jpg'
    },
    {
        title : 'pic2',
        pimages : './image/a2.jpg'
    },
    {
        title : 'pic3',
        pimages : './image/a3.jpg'
    },
    {
        title : 'pic4',
        pimages : './image/a4.jpg'
    },
]



// function PhotoList(props){
//     const psrc = props.psrc;
//     const listItem = psrc.map(
//         (src) => 
//         <li>{src}</li>
//     );
//     return (
//         <ul className="gListWrap">{listItem}</ul>
//     );
// };
// const psrc = [
//     './image/a1.jpg',
//     './image/a2.jpg',
//     './image/a3.jpg',
//     './image/a1.jpg'
// ];

class galleryList extends Component {
    constructor(props){
        super(props);
        this.state = {
            showPopup : false
            // popup 안뜨는 상태
        }
    }
    // togglePop = () => {
    //     this.setState({
    //         // setState는 state에 변화를 주기 위해서 무조건 거쳐야함 = state에 변화를 주기위해 사용
    //         //객체로 전달된는 값만 업데이트
    //         showPopup : !this.state.showPopup
    //     })
    // }
    togglePop = () => {
        this.setState(
            (state)=>({
                // 위의 코드랑 같은데, setState에 state를 받아오면 내부에서 this.state를 안 써주어도 됨
                showPopup : !state.showPopup
            })
        )
    }

    render() {
        return (
            <div>
                <ul className="gListWrap">
                    <li >
                        <GalleryUpload/>
                    </li>
                    {photos.map(photo => {
                        return <li><button onClick={this.togglePop.bind(this)}><img title={photo.title} src={photo.pimages}/></button></li>
                        // bind(this) 가 뭐지?? this ?? 여기 컴포넌트 내의 togglePop 함수?
                    })}
                </ul>
                {/* <PhotoList psrc={psrc} /> */}
                {this.state.showPopup ? 
                    <GalleryView closePopup={this.togglePop.bind(this)} />
                    //  ?? 닫는것...? // props 로 함수를 받아서 닫힘 버튼에 넣어줄 수 있나?
                    : null
                }
            </div>
        );
    }
}

export default galleryList;