import React, { Fragment} from 'react';
import ReactDom from 'react-dom';
import App from '@/components/Count/App';
import {CounterProvider} from '@/components/Count/CounterStore'
// import Count from './components/Count/index'


//如果想要全局的扩展React.Component的 组件的一些prototype
// 比如想把ajax的方法 全局的挂载到组件的this上，如下方法
// 组件内部就可通过this.http.方法名 来执行一些操作
// import * as services from './services'
// React.Component.prototype.http = services;


ReactDom.render(<Fragment>
    <CounterProvider>
      <App/>
    </CounterProvider>
</Fragment>,document.getElementById('app'));
