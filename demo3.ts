const demo3Count: number = 918; // 数字类型

const demo3Name: string = "jeejee"; // 字符串类型

const demo3Fn: {
    name: string;
    age: number;
} = {
    name: "jeejee is 28 years old",
    age: 28,
}; // 对象类型

const demo3Arr: string[] = ["cool", "is", "nice"]; // 数组类型

class demo3Person {} // 类类型
const demo3JeeJee: demo3Person = new demo3Person();

const demo3Fn2: () => string = () => {
    return "peace";
}; // 返回值为字符串的函数类型
