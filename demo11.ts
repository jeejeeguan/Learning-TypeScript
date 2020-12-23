// 类的访问类型
// private protected public

// 类的内部和外部

// public 类的属性，在内部和外部都能使用
/* class Person {
    public name: string;
    public sayHi() {
        console.log(this.name + " say hello");
    }
}
const person = new Person();
person.name = "jeejee";
person.sayHi();
console.log(person.name);

// private 类的属性，允许在类的内部使用，不允许在类的外部使用，包括继承
// protected 类的属性，允许在类的内部和继承中使用，不允许在类的外部使用
class Person2 {
    protected name: string;
    protected sayHi() {
        console.log(this.name + " say hello");
    }
}
class PersonChildren extends Person2 {
    public sayBye() {
        this.name; //继承后使用，没有报错
    }
}
const person2 = new Person2(); */
