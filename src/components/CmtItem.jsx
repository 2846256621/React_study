import React from 'react';

//第一层封装 将样式对象与ui结构分离
// const itemStyle = {border:'1px solid #dccccc',margin:'10px',padding:'10px',boxShadow:'0 0 10px #ccc'};
// const contentStyle ={fontSize:'14px'};

//第二层封装 合并样式对象
// const styles = {
//   item:  { border:'1px solid #dccccc',margin:'10px',padding:'10px',boxShadow:'0 0 10px #ccc'},
//   content:{fontSize:'14px'}
// };

//第三层 抽离为单独的样式js文件
import styles from '@/components/styles'

//使用function构造函数，定义无状态组件
export  default function CmtItem(props) {
    return <div style={styles.item}>
        <h3>评论人：{props.user}</h3>
        <p style={styles.content}>评论内容：{props.content}</p>
    </div>
}