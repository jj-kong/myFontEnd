//冒泡排序算法
var newArr = new Array;
newArr = [5, 2, 1, 3, 4, 0, -1, 6, 5, 10, 9];
for (var i = 0; i < newArr.length - 1; i++) {
    //var k = i;
    for (var j = 0; j <= newArr.length - 1 - i; j++) {
        /*if (newArr[i] > newArr[++k]) {
            var temp = newArr[i];
            newArr[i] = newArr[k];
            newArr[k] = temp;
        }*/
        if (newArr[j] > newArr[j + 1]) {
            var temp = newArr[j];
            newArr[j] = newArr[j + 1];
            newArr[j + 1] = temp;
        }
    }
}
console.log(newArr);


//