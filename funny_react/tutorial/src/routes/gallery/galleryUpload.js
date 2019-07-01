import React, { Component ,Fragment } from 'react';
import {Link, Route} from 'react-router-dom'

class galleryUpload extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div>
                <Link to="./galleryWrite">등록</Link>
            </div>
            
        );
    }
}

export default galleryUpload;