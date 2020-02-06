import React, { Fragment} from 'react';
import ReactDom from 'react-dom';

//todo 1.如果想要全局的扩展React.Component的 组件的一些prototype
// 比如想把ajax的方法 全局的挂载到组件的this上，如下方法
// 组件内部就可通过this.http.方法名 来执行一些操作
// import * as services from './services'
// React.Component.prototype.http = services;


// todo 2. context 传值的使用
// import App from '@/components/ContextCount/App';
// import {CounterProvider} from '@/components/ContextCount/CounterStore'

//todo 3. react-hooks的使用
import Count from './components/ContextCount/index';

//todo 4. 高阶组件的使用
// import App from './components/高阶组件/App'


//todo 5. redux的使用
// import App from './components/Redux/App'

//todo 6. redux购物车
import App from './components/ShoppingCar/App'
import store from './store'
//将store绑定到window上 好测试
window.store = store;
console.log(store);

ReactDom.render(<Fragment>
    {/*<CounterProvider>*/}
      {/*<App/>*/}
    {/*</CounterProvider>*/}
    <App store={store}/>

</Fragment>,document.getElementById('app'));
