import React from 'react';
import ReactDom from 'react-dom';

//使用class关键字，定义父组件
import CmtList from '@/components/CmtList2';


// 直接导入css样式表，默认是在全局上整个项目都生效  css没有独立的作用域
import cssObj from '@/css/cmtlist.css';
//空对象 因为css文件没有向外暴露  但修改module配置  css-loader 加参数 实现模块化
// console.log(cssObj);

//cssObj 会报错  写成 cssobj 就好了
import cssobj from '@/css/cmtindex.css';

ReactDom.render(<div id={cssobj.container}>
    <CmtList/>
</div>,document.getElementById('app'));