import React from "react";
//抽离出去子组件
import CmtItem from "@/components/CmtItem";

export default class CmtList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            commentList:[
                {id:1,user:'李四',content:'滴滴，吃饭'},
                {id:2,user:'张三',content:'滴滴，睡觉'},
                {id:3,user:'王二',content:'滴滴，沙雕'},
                {id:4,user:'雨晴',content:'滴滴，仙女'},
                {id:5,user:'熊总',content:'滴滴，挖煤'},
            ]
        }
    }
    render(){
        return <div>
            {/*在jsx中想写行内样式不能为style设置字符串的值*/}
            {/*<h2 style="color:red">这是评论列表组件</h2>*/}

            {/*正确写法：{{}} 连字符换成驼峰命名 font-size == fontSize*/}
            <h2 style={{color:'red',fontSize:'25px',textAlign:'center'}}>这是评论列表组件</h2>

            {this.state.commentList.map(item => <CmtItem {...item} key={item.id}/>)}
        </div>
    }

}
