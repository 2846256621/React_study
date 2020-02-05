import React, {Component} from 'react';
import  WithCopyright from './WithCopyright'
import Another from './Another'
class App extends Component {
    render() {
        return (
            <div>
            App
            <Another name="张三"/>
            </div>
        );
    }
}

//这样导出 相当于 调用 WithCopyright 组件
export default WithCopyright (App);