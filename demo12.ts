/* class d12Person {
    public name: string;
    constructor(name: string) {
        this.name = name;
    }
}
const d12person = new d12Person("jeejee");
console.log(d12person.name); */

// ---------简化为一下写法---------

/* class d12Person {
    constructor(public name: string) {}
}

class d12Teacher extends d12Person {
    constructor(public age: number) {
        super("is cool");
    }
} 

const d12NewTeacher = new d12Teacher(28);
console.log(d12NewTeacher.age);
console.log(d12NewTeacher.name); */
