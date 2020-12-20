class Lady {
    content = "hey guy";
    sayHi() {
        return this.content;
    }
}

class Woman extends Lady {
    // Woman 是 Lady 的子类
    /* sayHi() {
        return "hey dude"; // 类的重写
    } */
    sayHi() {
        return super.sayHi() + ", look at me,"; // 通过super调用父类的方法重写
    }
    sayLove() {
        return "do you want it?";
    }
}

// const goddess = new Lady();
const goddess = new Woman();
console.log(goddess.sayHi());
console.log(goddess.sayLove());
