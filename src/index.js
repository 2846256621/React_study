import React from 'react'
import ReactDom from 'react-dom'
import App from './App'
import {HashRouter as Router,Route} from 'react-router-dom'
ReactDom.render(
    <Router>
        <Route component={App}/>
    </Router>,
    document.getElementById('app')
);
/**
 * 只要最外面 包了 Router 则内部组件都可使用除了Router之外的与其有关的组件(Route,Link,Redirect,Switch)
 * 一些 关于路由的信息都在this.props上面
 * HashRouter与 BrowserRouter的区别是 多一个 #
 * */
