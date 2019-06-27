import React, { Component } from 'react';
import GalleryList from './galleryList'
import GalleryUpload from './galleryUpload'
import Paging from './paging'

//css / 스타일은 최상위에 해도 된다~
import '../../style/galleryListStyle.css'

class gallery extends Component {
    constructor(props) {
        super(props);
        
    }
    
    render() {
        return (
            <div>
                <h3>갤러리</h3>
                {/* echoi_오류 : import Component 파스칼 케이스로 작성!!! */}
                <GalleryUpload></GalleryUpload>
                <GalleryList></GalleryList>
                <Paging></Paging>
            </div>
        );
    }
}

export default gallery;