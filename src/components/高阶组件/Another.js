import React, {Component} from 'react';
import WithCopyright from "@/components/高阶组件/WithCopyright";

//装饰器 写法
// @WithCopyright
class Another extends Component {
    render() {
        return (
            <div>
                Another
                {this.props.name}
            </div>
        );
    }
}

export default WithCopyright(Another);