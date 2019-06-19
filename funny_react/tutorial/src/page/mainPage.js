import React, { Component } from 'react';

import {getUserName} from '../connect/getUser';

class mainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            getData:'nodata',
            postData:'nodata',
        }
    }

    render(){
        return(
            <div className="App">
                <h1>React Sample!!</h1>
                <br/>
                <span>getData : {this.state.getData}</span>
                <br/>
                <button type="button" onClick={this.getData}>getData!! </button>
                <button type="button" onClick={this.postDta}>postDta!! </button>
            </div>
        )
      }

    getData = async() => {
        await getUserName().then((res) => {
          console.info('axios : ', res);
          this.setState({
              ...this.state,
              getData:res.data.result.user_name
          })
        })
    }
  
    postDta = async() => {
        console.info('만드는중...');
    }
}
export default mainPage;