// 联合类型与类型保护

interface Waiter {
    sever: boolean;
    say: () => {};
}

interface Boss {
    sever: boolean;
    manage: () => {};
}

// 第一种类型保护叫类型断言
/* function guessWhoIs(who: Waiter | Boss) {
    // who: Waiter | Boss 就叫联合类型
    if (who.sever) {
        (who as Waiter).say();
    } else {
        (who as Boss).manage();
    }
} */

// 第二种类型保护 in
/* function guessWhoIs(who: Waiter | Boss) {
    if ("say" in who) {
        who.say();
    } else {
        who.manage();
    }
} */

// 第三种类型保护 typeof
/* function add(first: string | number, second: string | number) {
    if (typeof first === "string" || typeof second === "string") {
        return `${first}${second}`; // 拼接字符串
    }
    return first + second;
} */

// 第四种类型保护
/* class NumberObj {
    count: number;
}

function addObj(first: object | NumberObj, second: object | NumberObj) {
    if (first instanceof NumberObj && second instanceof NumberObj) {
        return first.count + second.count;
    }
    return 0;
} */
