import React, { Component } from 'react';
import dummys from './dummys.gif'

class galleryList extends Component {
    render() {
        return (
            <div>
                <ul className="gListWrap">
                    <li>
                        <input type="file" />
                    </li>
                    <li>
                        <img src={dummys} alt="img" />
                    </li>
                    <li>
                        <img src={dummys} alt="img" />
                    </li>
                    <li>
                        <img src={dummys} alt="img" />
                    </li>
                    <li>
                        <img src={dummys} alt="img" />
                    </li>
                    <li>
                        <img src={dummys} alt="img" />
                    </li>
                    <li>
                        <img src={dummys} alt="img" />
                    </li>
                    <li>
                        <img src={dummys} alt="img" />
                    </li>
                    
                </ul>
            </div>
        );
    }
}

export default galleryList;