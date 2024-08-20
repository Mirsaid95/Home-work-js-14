//  Task-1

// Ixtiyoriy arrow function yarating va unga beriladigan argument promt yordamida kiritilgan son bo'lsin. Kiritilgan sonning raqamlari yig'indisi topilsin.

// let son = +prompt("Son kiriting")


// const yigindi = (son) =>{
//     let count = 0;

//     for (let i = 1; i <= son;i++){
//         count += i;
//     }

//     return count;
// }

// console.log(yigindi(son));



// -------------------------------------------------------------------------------------------------------------------------------


// Task-2
// Ixtiyoriy arrow function yarating va uning parametriga bi nechta sonlar berilsin. 
// va o'sha sonlar yig'indisini arrayning element lari ko'rinishida ifodalang:
// masalan: [1, 22, 3] yigindisi: 26
// result=> [2,6]

// const arry = (a1, b2, c3) => {
//     let sum = a1 + b2 + c3;
//     result = String(sum).split('');
//     let newArr = [];
//     for (let i = 0; i < result.length; i++) {
//         Numbers = Number(result[i]);
//         newArr.push(Numbers);
//     }
//
//     return newArr;
// }

// console.log(arry(1, 22, 3));



// -------------------------------------------------------------------------------------------------------------------------------


// Task-3
// Prompt yordamida ixtiyoriy son kiritilsin va o'sha sonning kvadrati palindrome yoki palindrome emasligi topilsin 
// algorithm function ichida bo'lsin

// let a = 17;

// const Palindrome = (a) => {
//     daraja = a ** 2;
//     strdaraja = String(daraja);
//     let result;
//     for (let i = 0; i < strdaraja.length; i++) {
//         if (strdaraja[0] === strdaraja[strdaraja.length - 1]){
//             result = `${daraja} palindrom`;
//         } else {
//             result = `${daraja} palindrom emas !`;
//         }
//     }
//     return result;
// }

// console.log(Palindrome(a));

// -------------------------------------------------------------------------------------------------------------------------------


// Task-4
// Ixtiyoriy 2 ta funciton yaratilsin
// 1-function ichida random sonning raqamlari yig'indisi topilsin
// va mana shu 1-function 2-funciton ni ichida ishlasin
// masala callback function yordamida bajarilsin


// let Num1 = Math.floor(Math.random() * 10);
// let Num2 = Math.floor(Math.random() * 10);
// console.log(Num1);
// console.log(Num2);


// const sum = (rNum1, rNum2, callback) => {
//     let result = rNum1 + rNum2;
//     return callback(result);
// }

// const newline = (result) => { 
//     return (`Natija: ${result}`);
// }

// console.log(sum(Num1,Num2, newline));




// let a = 10;
// let b = 13;

// const sumRandom = (num1, num2, callback) => {
//     let sum = num1 + num2;
//     callback(sum);
// }

// const newline = (sumcallback) => { 
//     console.log(`natija: ${sumcallback}`);
// }

// sumRandom(a, b, newline);


// -------------------------------------------------------------------------------------------------------------------------------


// Task-5

// Prompt va function yarating prompt ichida yozilgan so'zning palindrome yoki palindrome emasligi topilsin

// let a = 'Akira';

// const Palindrome = (a) => {
//     middle = Math.floor(a.length / 2);
//     let one = '';
//     let two = '';
//     let result;

//     for (let i = 0; i < middle; i++) {
//         one += a[i];
//     }
//     if (a.length % 2 == 0) {
//         for (let i = a.length - 1; i >= middle; i--) {
//             last += a[i]
//         }
//     } else {
//         for (let i = a.length - 1; i > middle; i--) {
//             last += a[i]
//         }
//     }

//     if (one.toLowerCase() === last.toLowerCase()) {
//         result = `Bu so'z palindrom`;
//     } else {
//         result = `Bu so'z palindrom emas`;
//     }

//     return result;
// }

// console.log(Palindrome(a));


// -------------------------------------------------------------------------------------------------------------------------------



// Task-6

// Ixtiyoriy object yarating => {a:1,b:22}
// value larinig yig'indisini toping => 23
// value larining yigindising yig'indisini toping => 2 + 3 =

// let obj = {
//     productName: 'Pen',
//     oldPrice: 2400,
//     newPrice: 2500,
// }

// const addNumsInObj = (obj) => {
//     const objVal = Object.values(obj);
//     let sum = 0;

//     for (let i = 0; i < objVal.length; i++) {
//         if (typeof objVal[i] == 'number') {
//             sum += objVal[i];
//         }
//     }
//     return `$${sum}`;
// }

// console.log(addNumsInObj(obj));


// -------------------------------------------------------------------------------------------------------------------------------



// Task-7

// â€œ1java2script3 5deve6lo4perâ€ shu string orasidagi sonlarni 1 ta arreyga solib so'zlarni 
// boshqa bir stringa o'zlashtiring va return qiling object ko'rinishida


// let a = 'â€œ1java2script3 5deve6lo4perâ€';
// const seperateTheStringNumber = (a) => {
//     let newArr = [];
//     let newStr = '';
//     for (let i = 0; i < a.length; i++) {
//         if (!isNaN(a[i]) && a[i] !== ' ') {
//             newArr.push(a[i]);
//         } else {
//             newStr += a[i];
//         }
//     }
//     return {
//         number: newArr,
//         string: newStr
//     };
// }

// console.log(seperateTheStringNumber(a));


// -------------------------------------------------------------------------------------------------------------------------------


// Task-8

// tub sonni aniqlaydiga function yozing

// let a = +prompt('Son kiriting');

// const tubson = (a) => {
//     if (a <= 1) return 'Siz 1 yoki undan kichik son kiritdingiz. Bunday sonlar tub yoki tub emaslikka ajralmaydi!'
//     for (let i = 2; i < a; i++) {
//         if (a % i == 0) {
//             return 'Tub son emas'
//         }
//     }
//     return 'Tub son';
// }

// console.log(tubson(a));