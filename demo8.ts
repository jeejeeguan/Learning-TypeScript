/* const filterResume = (name: string, age: number, bust: number) => {
    age < 24 && bust >= 90 && console.log(name + "进入面试");
    (age >= 24 || bust < 90) && console.log(name + "被淘汰了");
};

const getResume = (name: string, age: number, bust: number) => {
    console.log(name + "年龄是" + age);
    console.log(name + "胸围是" + bust);
};

filterResume("貂蝉", 18, 92);
getResume("貂蝉", 18, 92);

// --------上面的写法可以被优化为接口 interface 写法-------------

interface Resume {
    name: string;
    age: number;
    bust: number;
    waistline?: number; // 可选值
}
const theGirl = {
    name: "玉环",
    age: 20,
    bust: 95,
    waistline: 22,
};
const filterResume2 = (theGirl: Resume) => {
    theGirl.age < 24 &&
        theGirl.bust >= 90 &&
        console.log(theGirl.name + "进入面试");
    (theGirl.age >= 24 || theGirl.bust < 90) &&
        console.log(theGirl.name + "被淘汰了");
};
const getResume2 = (theGirl: Resume) => {
    console.log(theGirl.name + "年龄是" + theGirl.age);
    console.log(theGirl.name + "胸围是" + theGirl.bust);
    theGirl.waistline &&
        console.log(theGirl.name + "腰围是" + theGirl.waistline);
};
filterResume2(theGirl);
getResume2(theGirl);
 */
