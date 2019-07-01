import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';

import GalleryList from './galleryList'
import Paging from './paging'
import GalleryView from './galleryView'
import GalleryWrite from './galleryWrite'


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
                <GalleryList></GalleryList>
                <Paging></Paging>
                {/* <GalleryView></GalleryView> */}
                <GalleryWrite></GalleryWrite>
            </div>
        );
    }
}

export default gallery;