/* class d12Person {
    public name: string;
    constructor(name: string) {
        this.name = name;
    }
}
const d12person = new d12Person("jeejee");
console.log(d12person.name); */

// ---------简化为一下写法---------

class d12Person {
    constructor(public name: string) {}
}
const d12person = new d12Person("jeejee");
console.log(d12person.name);
