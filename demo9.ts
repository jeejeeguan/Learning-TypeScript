interface Resume {
    name: string;
    age: number;
    bust: number;
    waistline?: number; // 可选值
    [propname: string]: any; // 返回值为任意的属性名为字符串的
    girlSay(): string; // 返回值为字符串的方法
}

interface Teacher extends Resume {
    teach(): string;
}

class littleGirl implements Resume {
    // littleGirl 受到 Resume 的约束
    name = "昭君";
    age = 18;
    bust = 90;
    girlSay() {
        return "很好笑";
    }
}

const girl = {
    name: "玉环",
    age: 20,
    bust: 95,
    waistline: 22,
    sex: "女",
    girlSay() {
        return "你好";
    },
    teach() {
        return "老师";
    },
};
const filterResume = (girl: Resume) => {
    girl.age < 24 && girl.bust >= 90 && console.log(girl.name + "进入面试");
    (girl.age >= 24 || girl.bust < 90) && console.log(girl.name + "被淘汰了");
};
const getResume = (girl: Teacher) => {
    console.log(girl.name + "年龄是" + girl.age);
    console.log(girl.name + "胸围是" + girl.bust);
    girl.waistline && console.log(girl.name + "腰围是" + girl.waistline);
    girl.sex && console.log(girl.name + "性别是" + girl.sex);
    girl.girlSay() && console.log(girl.name + "打招呼" + girl.girlSay());
    girl.teach() && console.log(girl.name + "的职业是" + girl.teach());
};
filterResume(girl);
getResume(girl);
