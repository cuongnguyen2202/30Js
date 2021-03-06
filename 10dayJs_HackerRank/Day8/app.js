/* let btn = document.querySelector("#btn");
let item = 0;

function handleBtn() {
    item++;
    let html = `${item}`;
    btn.innerHTML = html;
}

btn.addEventListener("click", handleBtn); */
/* let btn = document.getElementById("btn5");
let nums = [1, 2, 3, 6, 9, 8, 7, 4];
let ids = [1, 2, 3, 6, 9, 8, 7, 4];

function handleBtn(e) {
    nums.unshift(nums.pop());
    for (let i = 0; i <= 7; i++) {
        document.getElementById("btn" + ids[i]).innerHTML = nums[i];
    }
}
btn.addEventListener("click", handleBtn); */
// function factorial(n) {
//   let gt = 1;
//   for (let i = 1; i <= n; i++) {
//     gt *= i;
//   }
//   return gt;
// }
// console.log(factorial(4));
// var num = 2;
// var binaty = num.toString(2);
// console.log(binaty);
let res = document.querySelector("#res");
let btn0 = document.querySelector("#btn0");
let btn1 = document.querySelector("#btn1");
let btnClr = document.querySelector("#btnClr");
let btnEql = document.querySelector("#btnEql");
let btnSum = document.querySelector("#btnSum");
let btnSub = document.querySelector("#btnSub");
let btnMul = document.querySelector("#btnMul");
let btnDiv = document.querySelector("#btnDiv");
let calc;

btn0.addEventListener("click", function(e) {
    res.innerHTML += 0;
});
btn1.addEventListener("click", function(e) {
    res.innerHTML += 1;
});
btnClr.addEventListener("click", function(e) {
    res.innerHTML = "";
});
btnSum.addEventListener("click", function(e) {
    res.innerHTML += "+";
    calc = "+";
});
btnSub.addEventListener("click", function(e) {
    res.innerHTML += "-";
    calc = "-";
});
btnMul.addEventListener("click", function(e) {
    res.innerHTML += "*";
    calc = "*";
});
btnDiv.addEventListener("click", function(e) {
    res.innerHTML += "/";
    calc = "/";
});
btnEql.addEventListener("click", function(e) {
    let allRes = res.innerHTML;
    let item = allRes.split(calc);
    let numA = "0b" + item[0];
    let numB = "0b" + item[1];
    let result;
    switch (calc) {
        case "+":
            result = Number(numA) + Number(numB);
            res.innerHTML = result.toString(2);
            break;
        case "-":
            result = Number(numA) - Number(numB);
            res.innerHTML = result.toString(2);
            break;
        case "*":
            result = Number(numA) * Number(numB);
            res.innerHTML = result.toString(2);
            break;
        case "/":
            result = Number(numA) / Number(numB);
            res.innerHTML = result.toString(2);
            break;
    }
});
var num = [1, 1, 2, 2, 2, 3, 4, 5, 6, 7, 7, 7];
// num = new Set(num);
// console.log(num);

function getSecondLargest(nums) {
    // Complete the function
    let newNums = Array.from(new Set(nums));
    var Max = Math.max.apply(Math, newNums);

    newNums.splice(newNums.indexOf(Max), 1);
    var secondLargest = Math.max.apply(Math, newNums);
    return secondLargest;
}
console.log(getSecondLargest(num));
class Polygon {
    constructor(sizes) {
        this.sizes = sizes;
    }
    perimeter() {
        return this.sizes.reduce(function(total, item) {
            return (total += item);
        }, 0);
    }
}
// class Polygon {
//     constructor(sides) {
//         this.sides = sides;
//     }
//     perimeter() {
//         var sum = 0;
//         for (var i = 0; i < this.sides.length; i++) {
//             sum = sum + this.sides[i];
//         }
//         return sum;
//     }
// }
const rectangle = new Polygon([10, 20, 10, 20]);
const square = new Polygon([10, 10, 10, 10]);
const pentagon = new Polygon([10, 20, 30, 40, 43]);

console.log(rectangle.perimeter());
console.log(square.perimeter());
console.log(pentagon.perimeter());

function modifyArray(nums) {
    return (nums2 = nums.map((item) => {
        if (item % 2 == 0) {
            return item * 2;
        } else {
            return item * 3;
        }
    }));
}
console.log(modifyArray([1, 2, 3, 4, 5]));

function fizzBuzz(n) {
    // Write your code here
    for (let i = 1; i <= n; i++) {
        if ((i % 3 == 0) & (i % 5 == 0)) {
            console.log("FizzBuzz");
        } else if (i % 3 == 0) {
            console.log("Fizz");
        } else if (i % 5 == 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}
fizzBuzz(15);