import React from 'react';
import ReactDom from 'react-dom';

//导入 Hello组件  省略后缀 要配置 resolve
// import Hello from './components/Hello'

//@符号 表示项目根目录里的src 目录 要配置 alias
import Hello from '@/components/study/Hello'

const dog ={
    name:'雨晴',
    age:18,
    type:'仙女'
};

// 直接把组件以标签的形式加入  并为组件传值 （只有一个根元素）
ReactDom.render(<div>

    {//<Hello name={dog.name} age={dog.age} type={dog.type}/>
     //此方式太麻烦
    }

    {/*可用ES6*/}
    <Hello {...dog}/>
</div>,document.getElementById('app'));