// 泛型,一般用 T 来代表
// function join(first: string | number, second: string | number) {
//     return `${first}${second}`;
// }
// join("jeejee", "is cool");
function join<T, P>(first: T, second: P) {
    return `${first}${second}`;
}
join<string, number>("jeejee", 2);

// 泛型中数组的使用
function myFn<T>(params: T[]) {
    return params;
}

myFn<string>(["jee", "jee", "is"]);
