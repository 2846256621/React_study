import React from 'react';
import ReactDom from 'react-dom';

/***如果要用class 创建组件，必须让组件继承自React.Component
 * 组件内部，必须有render函数
 * render函数中，必须返回合法的JSX虚拟DOM结构
 */

/**
 * 在class关键字创建的组件中，若想要用外界传递过来的参数，不需要接收，直接通过this.props.xxx直接访问*/
class Movie extends React.Component{

    //由于Movie组件也是继承自React.Component，所以自定义的构造函数，必须调用 super()
    constructor(){
        super();

        //只有调用了super函数 才能使用this
        // this.state 相当于 Vue中的 data(){ return {} }
        this.state = {
            msg:'大家好，我是class创建的Movie组件'
        }
    }



    //render函数的作用是渲染当前组件 对应的虚拟dom结构
    //render是class的一个实例方法
    render(){

        //不管是class 还是 function 他们的props都是只读的，不能被重新赋值
        // this.props.name = 'fff';

        //class 中 this.state上的数据都是可读可写的
        this.state.msg = '这个数据被我修改了';
        return <div>
            这是movie组件的state数据:<br/>
            {this.state.msg}
            <hr/>
            这是传递过来的数据:<br/>
            姓名：{this.props.name} <br/>
            年龄：{this.props.age}<br/>
            类型：{this.props.type}
        </div>;
    }


}
const user = {
    name:'yu',
    age:21,
    type:'fairy'
};

ReactDom.render(<div>
    {/*这里的movie标签，相当于是Movie类的一个实例对象*/}
    {/*<Movie name={user.name} age={user.age}/>*/}
    <Movie {...user}/>

</div>,document.getElementById('app'));

/**
 * 1.class 与 function 创建组件的区别：
 * - 使用class有自己的私有数据和生命周期函数
 *   使用function，只有props，没有自己的私有数据和生命周期函数
 *
 * - function 创建的组件叫 “无状态组件”
 *   class 创建的组件 叫”有状态组件“
 *
 * 2.无状态组件与有状态组件的本质区别：
 * - 有无state属性和有无生命周期函数
 *
 * 3.什么时候使用有状态组件，什么时候使用无状态组件？
 * - 如果一个组件需要有自己的私有数据，则使用  有状态组件
 *   反之，推荐使用无状态组件
 * - 由于无状态组件没有自己的state和生命周期函数，所以运行效率会比有状态的高一点
 *
 * 4.组件中的props和state之间的区别
 * - props中的数据都是外界传递过来的
 *   state中的数据都是组件私有的（通过ajax获取的数据，一般是私有数据）
 * - props中的数据是只读的，不能重新赋值
 *   state中的数据，都是可读可写的
 *
 * */