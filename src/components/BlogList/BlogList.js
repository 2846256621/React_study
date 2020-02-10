import React, {Component} from 'react'
import BlogItem from './BlogItem'
import {connect} from 'react-redux'

import {fetchBlogList} from "@/actions/blog";

//实际上 这是一个容器组件
class BlogList extends Component {
    componentDidMount(){
      this.props.fetchBlogList()
    }

    //传入的数据做检测  prop-types
    render() {
        console.log(this.props);
        const {
            blogList,
            isLoading,
            errMsg
        } = this.props;

        const hasError =Boolean(errMsg);
        //加载之前是 loading...  加载失败 则是errMsg
        //两层 三元表达式
        return (
            isLoading ?
            <div>Loading...</div>:
            (hasError ?
             <div>{errMsg}</div>:
             <ul>
                 {
                     blogList.map(item => {
                         return (
                             <BlogItem key={item.id} {...item}/>
                         )
                     })
                 }
             </ul>
            )


        );
    }
}
const mapState = (state) =>{
    return{
        blogList:state.blog.list, //此处的blog 是reducer中 导出的blog.js 中初始化的 数据
        isLoading:state.blog.isLoading,
        errMsg:state.blog.errMsg
    }
};
export default connect(mapState,{fetchBlogList})(BlogList);