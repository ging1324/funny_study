import React, { Component, Fragment } from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
// 
import './App.css';

import Header from './component/Header'


import mainPage from './page/mainPage';
import login from './routes/account/login';
import board from './routes/boards/board';
import join from './routes/account/join';
import boardAdd from './routes/boards/boardAdd';
import boardDetail from './routes/boards/boardDetail';
import boardUpdate from './routes/boards/boardUpdate';
// 추가 ======
import gallery from './routes/gallery/gallery';
import galleryList from './routes/gallery/galleryList';
import paging from './routes/gallery/paging';

class App extends Component {
    constructor(props){
        super(props);
    }
  render() {
    const prefix = process.env.PUBLIC_URL;
    return (
        <Fragment>
            <Router>
                <Header />
                <Switch>
                <Route exact path={prefix +"/"} component={mainPage} />
                {/* exact 주어진 경로와 딱 맞아떨어져야지만 컴포넌트 보여줌 */}
                <Route path={prefix +"/main"} component={mainPage}/>
                <Route path={prefix +"/login"} component={login}/>
                <Route path={prefix +"/board"} component={board}/>
                <Route path={prefix +"/join"} component={join}/>
                <Route path={prefix +"/boardAdd"} component={boardAdd}/>
                <Route path={prefix +"/boardDetail"} component={boardDetail}/>
                <Route path={prefix +"/boardUpdate"} component={boardUpdate}/>
                
                {/* 추가 ===== */}
                <Route path={prefix + "/gallery"} component={gallery}/>
                <Route path={prefix + "/galleryList"} component={galleryList}/>
                <Route path={prefix + "/paging"} component={paging}/>
                
                </Switch>
            </Router>
        </Fragment>
      
    );
  }
}

export default App;
