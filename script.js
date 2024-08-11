// TASK 1 ||||||||||||||||||||||||||||||||||||||||||||||||||||
// n va m butun musbat sonlari berilgan (n > m). n sonini m soniga bo'lib butun va qoldia qismlarini bo lish va qoldiqni olish
// amallarini ishlatmasdan topuvchi programma tuzilsin.

// let m = 23;
// let n = 5;

// const findTheMaxFitRemainder = (m, n) => {
//     let whole = 0;
//     let remainder;
//     while (n < m) {
//         remainder = m -= n;
//         whole++;
//     }
//     return { whole, remainder };
// }

// let fresult = findTheMaxFitRemainder(m, n);
// console.log(fresult);






// TASK 2 ||||||||||||||||||||||||||||||||||||||||||||||||||||
// n butun soni berilgan (n > 0). Bo'lib butun va qoldia qismlarini aniqlash orqali,
// berilgan son raqamlarini teskari tartibda chiqaruvchi programma tuzilsin.

// let a = 12340;

// const reverseNumber = (num) => {
//     reversed = 0;
//     while (num > 0){
//         lastDigit = num % 10; // find the last digit of the given number
//         reversed = (reversed * 10) + lastDigit; // adding the last digit multiplied by 10 to a reversed to get reversed number
//         num = Math.floor(num / 10); // num divided by 10, and take only integer part to cut last digit and make it ready for next iteration
//     }
//     return reversed;
// }

// let fresult = reverseNumber(a);
// console.log(fresult);


// TASK 3 ||||||||||||||||||||||||||||||||||||||||||||||||||||
// n butun soni berilgan (n > 0). Bo'lib butun va qoldia qismiarini aniqlash orqali,
// berilgan son raqamlari yig'indisini va raqamlari sonini chiqaruvchi programma tuzilsin.

// let num = 231;

// const addFindTheDigits = (num) => {
//     let numOfDigits = 0;
//     let sumOfDigits = 0;
//     while (num > 0){
//         digit = num % 10;
//         sumOfDigits += digit 
//         num = Math.floor(num / 10);
//         numOfDigits++;
//     }
//     return {sumOfDigits, numOfDigits};
// }

// console.log(addFindTheDigits(num));


// TASK 4 ||||||||||||||||||||||||||||||||||||||||||||||||||||
// n butun soni berilgan (n > 0). Bo'lib butun va qoldia qismlarini aniqlash orgali,
// berilgan son raqamlarining orasida 2 raqami bor - yo'qligini aniqlovchi programma tuzilsin.

// let num = 12345;

// const findTheTwo = (num) => {
//     result = '';
//     while (num > 0) {
//         digit = num % 10;
//         if (digit == 2) {
//             result = `Kiritilgan sonda 2 raqami mavjud`;
//             return result;
//         } else {
//             result = `Kiritilgan sonda 2 raqami mavjud emas`;
//         }
//         num = Math.floor(num / 10);
//     }
//     return result;
// }
// console.log(findTheTwo(num));



// TASK 4 result declaration with initializer, deafult false
// let num = 12345;

// const findTheTwo = (num) => {
//     result = `Kiritilgan sonda 2 raqami mavjud emas`;
//     while (num > 0) {
//         digit = num % 10;
//         if (digit == 2) {
//             result = `Kiritilgan sonda 2 raqami mavjud`;
//             // } else {
//             //     result = `Kiritilgan sonda 2 raqami mavjud emas`;
//         }
//         num = Math.floor(num / 10);
//     }
//     return result;
// }
// console.log(findTheTwo(num));






// TASK 5 ||||||||||||||||||||||||||||||||||||||||||||||||||||
// While21. n butun soni berilgan (n > 0). Bo'lib butun va goldig qismlarini aniqlash orqali
// berilgan son raqamlarining orasida toq raqamlar bor - yo'qligini aniqlovchi programma

// let num = 23344;

// const findTheOdd = (num) => {
//     result = `Siz kiritgan son ichida toq raqami mavjud emas`;
//     let count = 0;
//     while (num > 0) {
//         digit = num % 10;
//         if (digit % 2 != 0) {
//             count++;
//             result = `Siz kiritgan son ichida toq raqami ${count} dona mavjud`;
//         }
//         num = Math.floor(num / 10);
//     }
//     return result;
// }
// console.log(findTheOdd(num));




// TASK 6 ||||||||||||||||||||||||||||||||||||||||||||||||||||

// let num = +prompt('Son kiriting');

// const findThePrime = (num) => {
//     let result = `${num} soni tub son`;
//     let count = 0;
//     let i = 2;
//     if (num > 1) {
//         while (i < num) {
//             if (num % i == 0) {
//                 count++;
//             }
//             i++;
//         }
//         if (count >= 1) {
//             result = `${num} soni tub emas`;
//         }
//     } else {
//         result = `Siz 1 yoki undan kichik sonni kiritdingiz. Bunday sonlar tub yoki tub emaslikka ajralmaydi!`;
//     }
//     return result;
// }

// console.log(findThePrime(num));





// TASK 6
// if else inside the loop while

// let num = Number(prompt('Son kiriting'));

// const findThePrime = (num) => {
//     let result = `${num} soni tub`;
//     let i = 2;
//     if (num > 1) {
//         while (i < num) {
//             if (num % i == 0) {
//                 result = `${num} soni tub emas`;
//                 return result;
//             }
//             i++;
//         }
//     } else {
//         result = `Siz 1 yoki undan kichik sonni kiritdingiz. Bunday sonlar tub yoki tub emaslikka ajralmaydi!`;
//     }
//     return result;
// }

// console.log(findThePrime(num));



// TASK 6
// less redundant

// let num = Number(prompt('Son kiriting'));

// const findThePrime = (num) => {
//     if (num <= 1) {
//         return `Siz 1 yoki undan kichik sonni kiritdingiz. Bunday sonlar tub yoki tub emaslikka ajralmaydi!`;
//     } else {
//         let i = 2;
//         while (i < num) {
//             if (num % i === 0) {
//                 return `${num} soni tub emas`;
//             }
//             i++;
//         }
//     }
//     return `${num} soni tub son`;
// }

// console.log(findThePrime(num));














// sonnni faktarialini topish rekursiya orqali va amalyotda ishlangan masalalarni functionda yozish