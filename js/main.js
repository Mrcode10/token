/*let myFreinds = ["amer", "ahmed", "alaa", "ali", "amer"];
console.log(myFreinds);

myFreinds.unshift("bhaa", "nabil");

console.log(myFreinds);

myFreinds.push("haya", "yaman");

console.log(myFreinds);

myFreinds.shift();

console.log(myFreinds);

myFreinds.pop();

console.log(myFreinds);

console.log(myFreinds.indexOf("amer", 2));

console.log(myFreinds.lastIndexOf("amer"));

console.log(myFreinds.lastIndexOf("amer", -2));

console.log(myFreinds.includes("amer"));

console.log(myFreinds.includes("amer", -2));

let myFriends2 = [10, "amer", "alaa", "90", 1000, 100, 20, "10", -20, -10];

console.log(myFriends2);

console.log(myFriends2.sort());

console.log(myFriends2.reverse());

let myFreinds2 = ["amer", "ahmed", "alaa", "ali", "ameer", "osama", "gamal"];

console.log(myFreinds2);

console.log(myFreinds2.slice());

console.log(myFreinds2.slice(1));

console.log(myFreinds2.slice(1, 3));

console.log(myFreinds2.slice(-3));

console.log(myFreinds2.slice(1, -2));

console.log(myFreinds2.slice(-4, -2));

console.log(myFreinds2);

myFreinds2.splice(0, 0, "sammer");

console.log(myFreinds2);

myFreinds2.splice(0, 2, "sammer");

console.log(myFreinds2);

let myFreinds2 = ["amer", "ahmed", "alaa", "ali", "ameer", "osama", "gamal"];
let myNewFriends = ["talal", "akrem"];
let schoolFriends = ["haytham", "shihab"];

let myAllFriends = myFreinds2.concat(myNewFriends, schoolFriends, [1, 2]);

console.log(myAllFriends);

console.log(myAllFriends.join());

console.log(myAllFriends.join("/").toUpperCase());*/

/*<====== Chalenge ======>

let zero = 0;
let counter = 3;
let my = ["ahmed", "mazero", "elham", "osama", "gamal", "ameer"];

let arrayOne = my.slice(zero, ++counter).reverse();
console.log(arrayOne);

let arrayTwo = my.slice(++zero, --counter).reverse();
console.log(arrayTwo);

let el = arrayTwo[--zero].slice(counter);
let ze = arrayTwo[--zero].slice(counter);
let Zero = el + ze;
console.log(Zero);


for (let i = 0; i < 10; i++) {
  console.log(i);
}*/

/*for (let i = 0; i < myFreinds.length; i++) {
  console.log(myFreinds[i]);
}*/
/*let myFreinds = [1, 2, "amer", "ahmed", 4, "alaa", "ali", "ammar"];
let onlyNames = [];

for (let i = 0; i < myFreinds.length; i++) {
  if (typeof myFreinds[i] === "string") {
    onlyNames.push(myFreinds[i]);
  }
}

console.log(onlyNames);

let products = ["keyboard", "mouse", "pen", "pad", "monitor"];

let colors = ["red", "green", "blue"];

mainLoop: for (let i = 0; i < products.length; i++) {
  console.log(products[i]);
  nestedLoop: for (let j = 0; j < colors.length; j++) {
    console.log(`- ${colors[j]}`);
    if (colors[j] === "green") {
      break;
    }
  }
}

<========= video 26 challenge ========>

let a = 1_00;
let b = 2_00.5;
let c = 1e2;
let d = 2.4;

console.log(Math.min(a, b, c, d));

console.log(a ** Math.round(d));

console.log(parseInt(d));
console.log(Math.trunc(d));
console.log(Math.floor(d));
console.log(Math.round(d));

console.log((parseInt(b) / Math.ceil(d)).toFixed(2));
console.log(Math.round(parseInt(b) / Math.ceil(d)));


let products = ["keyboard", "mouse", "pen", "pad", "monitor", "iphone"];
let i = 0; 
for (;;) {
  console.log(products[i]);
  i++;
  if (i === products.length) break;
}


let products = ["keyboard", "mouse", "pen", "pad", "monitor", "iphone"];
let colors = ["red", "green", "blue"];
let ShoewCount = 5;

document.write(`<h1>show ${ShoewCount} products</h1>`);

for (let i = 0; i < products.length; i++) {
  document.write(`<div>`);
  document.write(`<h3>[${i + 1}]${products[i]}</h3>`);
  for (let j = 0; i < colors.length; j++) {
    document.write(`<p>${colors[j]}</p>`);
  }
  document.write(`</div>`);
}
<====== video 30 =======>
let a = "Elzero Web School";

console.log(a.charAt(2).toUpperCase() + a.slice(3, 6));

let newa = a.replace("Elzero Web School", "h");
console.log(newa.toUpperCase().repeat(8));

console.log(a.split(" ", 1));

console.log(`${a.substr(0, 6)} ${a.substr(-6)}`);

console.log(
  a.charAt(0).toLowerCase() +
    a.slice(1, -1).toUpperCase() +
    a.charAt(a.length - 1).toLowerCase()
);
 

let a = 10;
let b = "20";
let c = 80;

console.log(++a + +b++ + c++ - +a++);
console.log(++a);= 11
console.log(+b++); =21
console.log(c++); = 81
console.log(+a++); =12

console.log(++a + -b + +c++ - -a++ + +a);

console.log(-(-c) + +b + -(-a) * +b++ - +b * a + -(-a) - +true);

let counter = 3;
let zero = 0;

let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

console.log(my.slice(zero, ++counter).reverse());

console.log(
  my
    .slice(++zero, counter)
    .reverse()
    .slice(+zero)
);

console.log(my.splice(my.length), "Elzero");

console.log(my[+zero].slice(4, 5) + my[1].slice(5).toUpperCase());

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

for (let i = 1; i <= 100; i += 2) {
  console.log(i);
}

for (let i = 1; i <= 100; i++) {
  let row = "7 *" + i + " = " + 7 * i;
  console.log(row);
}


for (let i = 1; i <= 100; i++) {
  console.table(i);
  console.log("");
}
function printTable(n) {
  for (let i = 0; i <= 100; i++) {
    let row = i + "*" + i + "=" + n * i;
    console.log(row);
  }
}

let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum += 1;
}
console.log(sum);


let prod = 1;
for (let i = 1; i <= 10; i++) {
  prod *= i;
  console.log(prod);
}


let pro = 0;
for (let i = 10; i <= 30; i += 2) {
  pro = i;
  console.log(i);
}


function CtoF(n) {
  return n * 1.8 + 32;
}
let f = CtoF(12.2);
console.log(f);

function FtoC(n) {
  return (n - 32) / 1.8;
}
let c = FtoC(53.96);
console.log(c);
*/

/*Coding challenge #11
Calculate the average of the numbers in an array of numbers
Example array: [1, 3, 9, 15, 90]
Expected output: 23.6

let a = 10;

a < 0
  ? console.log(10)
  : a >= 10 && a <= 40
  ? console.log("10 to 40")
  : a > 40
  ? console.log(">40)")
  : console.log("unknown");

let job = "Manager";
let Salary = 0;

switch (job) {
  case "Manager":
    Salary = 8000;
    console.log(Salary);
    break;
  case "IT":
  case "Support":
    Salary = 6000;
    console.log(Salary);
    break;
  case "Developer":
  case "Designer":
    Salary = 7000;
    console.log(Salary);
    break;
  default:
    Salary = 4000;
    console.log(Salary);
}

let holidays = 0;
let money = 0;

if (holidays === 0) {
  money = 5000;
  console.log(`My Money is ${money}`);
} else if (holidays === 1 || holidays === 2) {
  money = 3000;
  console.log(`My Money is ${money}`);
} else if (holidays === 3) {
  money = 2000;
  console.log(`My Money is ${money}`);
} else if (holidays === 4) {
  money = 1000;
  console.log(`My Money is ${money}`);
} else if (holidays === 5) {
  money = 0;
  console.log(`My Money is ${money}`);
} else {
  money = 0;
  console.log(`My Money is ${money}`);
}


let zero = 0;
let counter = 3;

let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

console.log(my.slice(zero, ++counter).reverse());

console.log(my.slice(++zero, --counter).reverse()); //[ "Elham","Mazero"]

console.log(my.splice(my.length), "Elzero"); //"Elzero"

console.log(my[+zero].slice(++counter) + my[++zero].slice(5).toUpperCase());
//"rO"
//console.log(my[+zero].slice(4, 5) + my[1].slice(5).toUpperCase());

let products = ["keyboard", "pen", "mouse", "ipad"];

let colors = ["black", "blue", "red"];

let models = ["2020", "2021"];

for (let i = 0; i < products.length; i++) {
  console.log("#".repeat(15));
  console.log(`# ${products[i]}`);
  console.log("#".repeat(15));
  console.log("colors: ");

  for (let j = 0; j < colors.length; j++) {
    console.log(`- ${colors[j]}`);
  }
  console.log("models: ");
  for (let k = 0; k < models.length; k++) {
    console.log(`- ${models[k]}`);
  }
}


let myAdmins = ["Ahmed", "Asama", "Sayed", "stop", "Samera"];
let myEmployees = [
  "Amged",
  "Samag",
  "Ameer",
  "Omar",
  "Othman",
  "Amany",
  "Samia",
];
//ahmed,osama,sayed مصفوفة من أجل وضع العناصر admin[]
let admins = [];

for (let i = 0; i < i < myAdmins.length; i++) {
  if (myAdmins[i] === "stop") {
    break;
  }
  admins.push(myAdmins[i]);
}
document.write("we have " + admins.length + " Admins<br>");
//------------------------<>----------------------------
for (let j = 0; j < admins.length; j++) {
  let count = 1;
  document.writeln("<hr>");
  document.write("The Admin for Team " + (j + 1) + " is " + admins[j]);
  document.write("<h3>Team Members :</h3>");
  for (let w = 0; w < myEmployees.length; w++) {
    if (myEmployees[w][0] === admins[j][0]) {
      document.write(count + " - " + myEmployees[w] + "<br>");
      count++;
    }
  }
}

document.write("<h1>Elzero</h1>");
document.querySelector("h1").style.color = "blue";
document.querySelector("h1").style.fontSize = "80px";
document.querySelector("h1").style.fontWeight = "bold";
document.querySelector("h1").style.textAlign = "center";
document.querySelector("h1").style.fontFamily = "Arial";


let numberOne = 10;
let numberTwo = 20;

console.log(numberOne.toString() + numberTwo.toString());
console.log(typeof (numberOne + numberTwo).toString());
console.log(`${numberOne}${numberTwo}`);
console.log(typeof `${numberOne}${numberTwo}`);

console.log(numberOne + "\n" + numberTwo);

console.log("=".repeat(15));

console.log(
  '`I\'m In \\\\ \nLove \\\\ " \'\'\' \n++With++\n \\"""\\""" \n ""JavaScript""\'\''
);

let a = 21;
let b = 20;

console.log("_" + (a + "_" + b).repeat(4) + "_");


console.log(10 * 20 + (15 % 3) + 190 + 10 - 400);


let num = 3;

console.log(num * num - num);

console.log(num + true + true + true);

console.log(num * (true + true));

console.log(num * (num - true));

console.log(num ** (true + true) - num);

console.log(num + num);


let num = "10";
console.log(Number(num) + Number(num));

console.log(+num * (true + true));

console.log(-num * (-true - true));

console.log(+num - num * -true);


function calc(...numbers) {
  let result = 0;
  for (let i = 0; i < numbers.length; i++) {
    result += numbers[i];
  }
  return `the final result is ${result}`;
}
console.log(calc(10, 20, 30, 40, 70, 80));


function showDetails(...x) {
  document.write(`<div>`);
  for (let i = 0; i < x.length; i++) {
    if (typeof x[i] === "string") {
      document.write(`"Hello ${x[i]},`);
      break;
    }
  }
  for (let i = 0; i < x.length; i++) {
    if (typeof x[i] === "number") {
      document.write(` Your Age Is ${x[i]},`);
      break;
    }
  }
  for (let i = 0; i < x.length; i++) {
    if (typeof x[i] === "boolean") {
      if (x[i] === true) {
        document.write(` You Are Available For Hire"`);
      } else {
        document.write(` You Are Not Available For Hire"`);
      }
      break;
    }
  }
  document.write(`</div>`);
}

showDetails(false, "osama", 38);
showDetails("Osama", 38, true);
showDetails(38, "Osama", true);
showDetails(true, 38, "Osama");

let num = 9;
if (num < 10) {
  console.log(`00${num}`);
}
let num1 = 20;
if (num1 > 10) {
  console.log(`0${num1}`);
}

let num2 = 110;
if (num2 >= 100) {
  console.log(`${num2}`);
}

*/

// let num1 = 9;
// let str = "9";
// let str2 = "20";

// if (num1 == str) {
//   console.log(`{num1} is the same value as {str}`);
// }

// if ((num1 == str) & (typeof num1 === typeof str)) {
//   console.log(`{num1} is the same value as {str}`);
// } else {
//   console.log(`{num1} is the same value as {str} but not same type.`);
// }

// document.getElementById("cl").onclick = function () {
//   console.log("AMER\n");
// };

// let start = 10;
// let end = 100;
// let exclude = 40;

// for (let i = start; i <= end; i = i + start) {
//   if (i === exclude) {
//     continue;
//   }
//   console.log(i);
// }

function createSelectBox(startYear, endYear) {
    document.write(`<select>`);
    for (let i = startYear; i <= endYear; i++) {
        if (i === 2009) {
            continue;
        }
        document.write(`<option value="${i}">${i}</option>`);
    }
    document.write(`</select>`);
}
createSelectBox(2000, 2021);