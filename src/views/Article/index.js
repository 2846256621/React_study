import React, {Component} from 'react';
import {Link, Route} from 'react-router-dom';
// import ArticleDetail from './ArticleDetail'
class Article extends Component {
    render() {
        return (
            <div>

                {/*显式传参*/}
                <Link to="/Article/1?from='article'">文章1</Link>
                {/*隐式传参*/}
                <Link to={
                   {
                    pathname:'/article/2',
                    state:{
                        from:'article'
                   }
                }}>文章2</Link>
                <Link to='/Article/3'>文章3</Link>

                {/*在其父级进行路由匹配*/}
                {/*<Route component={ArticleDetail} path='/article/:id'/>*/}
            </div>
        );
    }
}

export default Article

/**
 * 路由传参的方式
 * 1.query
 * 2.动态路由 /path/:param => params
 * 3.使用state 隐式传参
 *
 * 埋点
 * 发送数据：
 * 1.ajax
 * 2.img
 *   const img = new Image()
 *   img.src = "http://www.baidu.com?x=2&y=2" 2x2
 * 3. navigator.sendBeacon(url,data)
 * */