// // es5
// var name = 'Vasya';
// var age = 20;
//
// age = []
// console.log(age)

// es6
// let name = 'Vasya';
// const age = 20;
// // const SOME_CONSTANT = 20;
//
// // age = []
// console.log(age)

// es5
// function passTest(result) {
//     // var firstName;
//     // var yearOfBirth;
//     //
//     // if (result) {
//     //     firstName = 'Vasya';
//     //     yearOfBirth = 1990;
//     // }
//
//     if (result) {
//         var firstName = 'Vasya';
//         var yearOfBirth = 1990;
//     }
//
//     console.log(firstName + ' рожденный в ' + yearOfBirth + ' сдал тест!');
// }
//
// passTest(true);

// es5
// function passTest(result) {
//     let firstName;
//     let yearOfBirth;
//
//     if (result) {
//         firstName = 'Vasya';
//         yearOfBirth = 1990;
//     }
//
//     console.log(firstName + ' рожденный в ' + yearOfBirth + ' сдал тест!');
// }
//
// passTest(false);
// console.log(a);
//
// {
//     let a = 1;
//     console.log(a);
// }

// console.log(a);

// es5
// var i = 23;
//
// for (var i = 0; i < 5; i++) {
//     console.log(i);
// }
//
// console.log(i);

// es6
// let i = 23;
//
// for (let i = 0; i < 5; i++, console.log(i)) {
//     console.log(i);
// }
//
// console.log(i);

// function a() {
//     // 'use strict';
//     var b = 5;
//     let c = 10;
//     d = 20;
// }
//
// a();
//
// // console.log(b)
// // console.log(c)
// console.log(d)

// es5
// var firstName = 'John';
// var lastName = 'Smith';
// var yearOfBirth = 1990;
//
// function calcAge(year) {
//     return 2021 - year;
// }
//
// console.log(firstName + ' ' + lastName + ' рожден в ' + yearOfBirth + '.' + ' Ему сейчас ' + calcAge(yearOfBirth));

// es6
// const firstName = 'John';
// const lastName = 'Smith';
// const yearOfBirth = 1990;
//
// function calcAge(year) {
//     return 2021 - year;
// }
//
// console.log(`${firstName} ${lastName} рожденный в ${yearOfBirth}. Ему сейчас ${calcAge(yearOfBirth)}`);

// const str = `${firstName} ${lastName}`;
// console.log(str);
// console.log(str.startsWith('J'));
// console.log(str.endsWith('th'));
// console.log(str.includes('n S'));
// console.log(`${str} `.repeat(5));

// Arrow Functions

// const calcAge = () => {
//     return 6;
// }
//
// console.log(calcAge());

// const calcAge = (x) => {
//     return 6 - x;
// }

// const calcAge = x => 6 - x;

// console.log(calcAge(3));

// const calcAge = (x, y = 10) => {
//     return 6 - x + y;
// }
//
// console.log(calcAge(1));

// es5
// var box = {
//     color: 'green',
//     position: 1,
//     clickMe: function () {
//         // document.getElementsByClassName('green')[0]
//         //     .addEventListener('click', function () {
//         //         console.log(this);
//         //         console.log('This is a box number ' + this.position + ' and color ' + this.color);
//         //     }.bind(this));
//         var _this = this;
//         document.getElementsByClassName('green')[0]
//             .addEventListener('click', function () {
//                 console.log(_this);
//                 console.log('This is a box number ' + _this.position + ' and color ' + _this.color);
//             });
//     }
// }
//
// box.clickMe();

// es6
// const box = {
//     color: 'green',
//     position: 1,
//     clickMe: function () {
//         document.querySelector('.green').addEventListener('click', () => {
//             console.log(this);
//             let str = `This is a box number ${this.position} and color ${this.color}`;
//             console.log(str);
//         });
//     },
// };
// box.clickMe();

// es5
// var arr = ['John', 25];
// var name = arr[0];
// var age = arr[1];
//
// console.log(name, age);

// es6
// const arr = ['John', 25, true];
// let [name, age, isAdmin] = arr;
//
// console.log(name, age, isAdmin);

// const obj = {
//     firstName: 'John',
//     lastName: 'Snow',
//     colors: ['white', 'black'],
// };
//
// let { firstName: n, lastName: ln, colors: [c, d] } = obj;
//
// // console.log(firstName, lastName, colors);
// console.log(n, ln, c, d);

// const arr = ['John', 25, true];
// let {2: isAdmin} = arr;
//
// console.log(isAdmin);
