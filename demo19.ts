// 初级程序员
/* function getService(status: number) {
    if (status === 0) {
        return "massage";
    } else if (status === 1) {
        return "SPA";
    } else if (status === 2) {
        return "run out";
    }
}
const result = getService(1);
console.log(`我要去${result}`); */

// 高级程序员用 enum 枚举的方式
enum Status {
    MASSAGE, // 默认顺序是从 0 开始的，如果要从 1 开始，就写成：MASSAGE=1
    SPA,
    RUNOUT,
}
function getService(status: any) {
    if (status === Status.MASSAGE) {
        return "massage";
    } else if (status === Status.SPA) {
        return "SPA";
    } else if (status === Status.RUNOUT) {
        return "run out";
    }
}
const result = getService(1);
console.log(`我要去${result}`);
