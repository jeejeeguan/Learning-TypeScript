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
const filterResume = (theGirl: Resume) => {
    theGirl.age < 24 &&
        theGirl.bust >= 90 &&
        console.log(theGirl.name + "进入面试");
    (theGirl.age >= 24 || theGirl.bust < 90) &&
        console.log(theGirl.name + "被淘汰了");
};
const getResume = (theGirl: Resume) => {
    console.log(theGirl.name + "年龄是" + theGirl.age);
    console.log(theGirl.name + "胸围是" + theGirl.bust);
    theGirl.waistline &&
        console.log(theGirl.name + "腰围是" + theGirl.waistline);
};
filterResume(theGirl);
getResume(theGirl);

// echo "# Learning-Typescript" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/jeejeekwan/Learning-Typescript.git
// git push -u origin main
