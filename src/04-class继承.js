import React from 'react';
import ReactDom from 'react-dom';

//父类 相当于是个原型对象
class Person {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    sayHello(){
        console.log('大家好')
    }
}


//子类
class American extends Person{
    constructor(name,age) {
        super(name,age);  //super相当于调用父类的构造器
    }

}
const a1 = new American('Jack',20);
// a1.sayHello();
console.log(a1);


//子类
class Chinese extends Person{
    constructor(name,age,Id){
        //子类的 this 只能放在 super之后
        super(name,age);
        this.Id = Id;
    }
}
const c1 = new Chinese('张三',22,'6125241998091329XX');
// c1.sayHello();
console.log(c1);

ReactDom.render(<div> </div>,document.getElementById('app'));

