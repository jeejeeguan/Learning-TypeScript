// class Woman {
//     constructor(private _age: number) {}
//     get age() {
//         return this._age - 10;
//     }
//     set age(age: number) {
//         this._age = age;
//     }
// }

// const XiShi = new Woman(27);
// console.log(XiShi.age);

// private 保护内部属性不被外部访问，但可以用 get set 方法来变化包装

// static 静态类

// 传统写法
// class Girl {
//     sayLove() {
//         return "I love you.";
//     }
// }
// const girl = new Girl();
// console.log(girl.sayLove());

// 静态类写法
class Girl {
    static sayLove() {
        return "I love you.";
    }
}
console.log(Girl.sayLove());
