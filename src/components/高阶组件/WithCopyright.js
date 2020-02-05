import React, {Component, Fragment} from 'react';
//高阶组件

// 执行此组价  返回一个新组件
const  WithCopyright = (YourComponent)=>{
    return class WithCopyright extends Component {
        render() {
            return (
                //使用扩展运算符 将props传递下去
                <Fragment>
                    {/*即传入的组件，进行数据再次传递*/}
                    <YourComponent {...this.props}/>
                    <div>&copy;2019 &nbsp;小仙女</div>
                </Fragment>
            );
        }
    }
};
export default WithCopyright;