function d5Sum(one: number, two: number): number {
    return one + two;
}

function d5Sum2(): void {
    console.log("");
}

function d5Sum3(): never {
    throw new Error(); // 永远执行不到
    console.log("Error");
}

function d5Sum4(): never {
    while (true) {} // 死循环
    console.log("Error");
}

function d5Add({ one, two }: { one: number; two: number }) {
    return one + two;
} // 当参数是对象时候，要这样写注解类型
const d5Total = d5Add({ one: 1, two: 2 });

function d5Add2({ one }: { one: number }) {
    return one;
}
const d5Total2 = d5Add2({ one: 1 });
