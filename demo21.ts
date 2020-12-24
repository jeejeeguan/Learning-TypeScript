interface Girl {
    name: string;
}

// class SelectGirl<T extends Girl> {
//     // 泛型继承上一个接口
//     constructor(private girls: T[]) {}
//     getGirl(index: number): string {
//         return this.girls[index].name;
//     }
// }
// const selectGirl = new SelectGirl([
//     {
//         name: "jjj",
//     },
//     {
//         name: "kkk",
//     },
//     {
//         name: "lll",
//     },
// ]);
// console.log(selectGirl.getGirl(1));

// 泛型的约束
// class SelectGirl<T extends number | string> {
//     constructor(private girls: T[]) {}
//     getGirl(index: number): T {
//         return this.girls[index];
//     }
// }
// const selectGirl = new SelectGirl<string>(["jjj", "kkk", "lll"]);
// console.log(selectGirl.getGirl(1));
