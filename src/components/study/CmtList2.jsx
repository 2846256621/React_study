import React from "react";
//抽离出去子组件
import CmtItem from "@/components/study/CmtItem2";
import cssobj from '@/css/cmtlist.css';
// console.log(cssobj);

//如果字啊引用某个包的时候，这个包被安装到node_modules目录中，这层目录可以省略，直接从包名开始引用这层目录

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
        return <div className={cssobj.content}>
            {/*info是全局的 className="info"  所以这样写*/}
            <h2 className={[cssobj.title,cssobj.title2].join(' ')}>这是评论列表组件</h2>
            <p className={"info"}>我也是个小仙女</p>
            <button className={cssobj.btn}>发表评论</button>
            {this.state.commentList.map(item => <CmtItem {...item} key={item.id}/>)}
        </div>
    }

}
