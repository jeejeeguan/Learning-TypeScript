const d6NumberArr: number[] = [1, 2, 3];
const d6StringArr: string[] = ["coding", "coding", "coding"];
const d6UndefinedArr: undefined[] = [undefined, undefined];
const d6MixArr: (number | string)[] = [1, 2, "coding"];

// 类型别名 type alias
type Person = { name: string; age: number };
class Human {
    name: string;
    age: number;
}
const d6MixArr2: Person[] = [
    {
        name: "jeejee",
        age: 28,
    },
    {
        name: "kwan",
        age: 27,
    },
];
const d6MixArr3: Human[] = [
    {
        name: "jeejee",
        age: 28,
    },
    {
        name: "kwan",
        age: 27,
    },
];

console.log(d6MixArr2[1]);
console.log(d6MixArr3[1]);
