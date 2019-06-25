import React, { Component } from 'react';

class paging extends Component {
    render() {
        return (
            <ul className="paging">
                <li><button className="pagingtBtn">&lt;</button></li>
                <li><button className="pagingtBtn active">1</button></li>
                <li><button className="pagingtBtn">2</button></li>
                <li><button className="pagingtBtn">3</button></li>
                <li><button className="pagingtBtn">4</button></li>
                <li><button className="pagingtBtn">5</button></li>
                <li><button className="pagingtBtn">&gt;</button></li>
            </ul>
        );
    }
}

export default paging;