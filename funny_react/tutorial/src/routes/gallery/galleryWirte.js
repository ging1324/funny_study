import React, { Component } from 'react';

class galleryWirte extends Component {
    render() {
        return (
            <div>
                <form className="wirteStyle">
                    <input type="file" value="" />
                    <textarea placeholder="글 작성">

                    </textarea>
                </form>
                <button type="submit">등록</button>
            </div>
        );
    }
}

export default galleryWirte;