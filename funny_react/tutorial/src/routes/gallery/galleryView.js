import React, { Component } from 'react';


class galleryView extends Component {
    render() {
        return (
            <div>
                <div className="fixWrap" onClick={(e)=>{this.props.closePopup(); e.stopPropagation();}} >
                    {/* togglePop을 여기서 closePop으로 받아주는건가? */}
                    <div className="imgWrap">
                        <img src="./image/a1.jpg"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default galleryView;