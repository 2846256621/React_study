import React, {Component, Fragment} from 'react';

/***Route 是路由组件展示
 * Link 是跳转 相当于a标签  NavLink 比 Link 值多了一个 activeClass
 * Redirect 是设置默认跳转位置
 * Switch 是路由匹配 只能匹配到其中一个
 *
 *
 * Switch 匹配其中的一个，按顺序进行，如果匹配到，则不会往下进行
 * Route是非完全匹配  比如： /article 匹配了 就不会再匹配 /article/:id 了
 * 使用 exact 属性，这个属性是 完全匹配规则
 * */
import {Route,Link,Redirect,Switch} from  'react-router-dom'

import {
    Home,
    Users,
    Article,
    ArticleDetail,
    NotFound
} from './views'
class App extends Component {
    constructor(){
        super();
        const state ={
            isLogin:false
        };
    }
    render() {
        // console.log(this.props);
        return (
            <div>
                <ul>
                    <li><Link to='/home'>首页</Link></li>
                    <li><Link to='/article'>文章</Link></li>
                    <li><Link to='/users'>用户</Link></li>
                </ul>

                {/*按顺序匹配，只会匹配其中的一个 */}
                <Switch>
                     /**
                     * todo component 与 render 属性，都是展示path对应的组件
                     * component 的优先级大于 render
                     * todo component不能传参，但是render可以传入参数
                     * render 必须是一个方法
                     */
                    <Route component={Home} path='/home'/>
                    <Route path='/home' render={(routerProps)=> {
                       return <Home {...routerProps} x={1}/>
                    }}/>


                    <Route component={Article} path='/article' exact/>
                    <Route component={ArticleDetail} path='/article/:id'/>
                    {/*<Route component={Users} path='/users'/>*/}

                    {/*权限控制*/}
                    <Route  path='/users' render={(routerProps)=>{
                        return this.isLogin ? <Users {...routerProps}/> : <div>请登录</div>
                    }}/>

                    <Route component={NotFound} path='/404'/>
                    <Redirect to='/home' from='/' exact/>
                    <Redirect to='/404'/>
                </Switch>
            </div>
        );
    }
}

export default App;