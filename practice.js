// var age = prompt("请输入您的年龄");
// alert('您今年' + age + '岁');
// var year = prompt('输入出生年份');
// alert(2022 - year);
// var num1 = prompt('输入第一个数：');
// var num2 = prompt('输入第二个数：');
// alert(Number(num1) + Number(num2));
// var num1 = 0, num2 = 5, num3 = 3;
// alert(num1 && num2,);
// alert(num1 || num3);
function Inverse() {
    var newArr = [];
    for (var i = arguments.length - 1; i >= 0; i++) {
        newArr[newArr.length++] = newArr[i];
    }
    return newArr;
}
console.log(Inverse());