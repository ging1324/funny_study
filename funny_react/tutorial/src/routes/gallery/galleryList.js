import React, { Component } from 'react';
import GalleryUpload from './galleryUpload'

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
        pimages : 'image/a4.jpg'
    },
    {
        title : 'pic3',
        pimages : 'image/a3.jpg'
    },
    {
        title : 'pic2',
        pimages : 'image/a2.jpg'
    },
    {
        title : 'pic1',
        pimages : 'image/a1.jpg'
    },
    {
        title : 'pic4',
        pimages : 'image/a4.jpg'
    },
    {
        title : 'pic4',
        pimages : 'image/a4.jpg'
    },
    {
        title : 'pic1',
        pimages : 'image/a1.jpg'
    },
    {
        title : 'pic2',
        pimages : 'image/a2.jpg'
    },
    {
        title : 'pic3',
        pimages : 'image/a3.jpg'
    },
    {
        title : 'pic4',
        pimages : 'image/a4.jpg'
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
    render() {
        return (
            <div>
                <ul className="gListWrap">
                    <li>{galleryUpload}</li>
                    {photos.map(photo => {
                        return <li><img title={photo.title} src={photo.pimages} /></li>
                    })}
                </ul>
                {/* <PhotoList psrc={psrc} /> */}
            </div>
        );
    }
}

export default galleryList;