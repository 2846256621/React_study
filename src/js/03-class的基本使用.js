import React from 'react';
import ReactDom from 'react-dom';

//class是ES6提出的 面向对象的新属性

function Person(name,age) {
    this.name = name;
    this.age =age;
}
//info直接挂在给了构造函数，所以是静态属性
Person.info='信息';

//show是Person的静态方法
Person.show= function () {
    console.log('这是person的静态方法')
};

// new 出来的实例访问到的属性是 实例熟悉
const p1 = new Person('小仙女',19);
console.log(p1.info);

// 通过构造函数，直接访问到的属性，是叫静态属性
console.log(Person.info);

//挂载到Person的原型上 这是实例方法
Person.prototype.say = function () {
    console.log('这是Person的实例方法')
};
console.log(p1);
console.log(p1.say());
console.log(Person.show());
//--------------- class -------------
class Animal{
    //当new 这个类时，会优先执行 构造器的代码
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    //class内部静态属性 static修饰的属性
    static info = 'eee';

    //这是Animal的实例方法
    wang(){
        console.log('这是Animal的实例方法');
    }
    //这是Animal的静态方法
    static show(){
        console.log('这是Animal的静态方法')
    }
}
const  a = new Animal('雨晴',3);
console.log(Animal.info); //Animal的静态属性
console.log(a); //挂载Animal实例上的方法
Animal.show();

ReactDom.render(<div>

</div>,document.getElementById('app'));

/**
 * 静态方法都是给了构造函数 没有static修饰符
 * 实例方法是给了原型对象
 *
 * 在class区间内 只能写 构造函数 实例属性 静态属性和方法
 * */