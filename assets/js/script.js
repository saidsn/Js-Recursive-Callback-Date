

 "use strict"



// function sum(n) {

//     let result = 0;
//     for (let i = 0; i <= n; i++) {
//        result +=i;
//     }
//     return result;
// }

// let result = sum(4);
// console.log(result);

// function getFactorial(n) {

//     if (n == 1) {
//         return n;
//     }else{
//         return n * getFactorial(n - 1);
//     }
// }
// let n = 5;
// let resultFact = getFactorial(n);
// console.log(resultFact);

// function getSum(m) {

//     if (m == 1) {
//         return m;
//     }else{
//         return m + getSum(m - 1);
//     }
// }
// let m = 5;
// let resultSum = getSum(m);
// console.log(resultSum);




// let users =[{
//     name: "Cavid",
//     surname: "Bashirov",
//     email: "cavid@code.edu.az",
//     password : "12345"
// },
// {
//     name: "Eshqin",
//     surname: "Aliyev",
//     email: "eshqin@code.edu.az",
//     password: "123456"
// },
// {
//     name: "Haqverdi",
//     surname: "Aliyev",
//     email: "haqverdi@code.edu.az",
//     password: "12345"
// }];




//  for (const key in users) {
//   console.log(users[key]);
//  }



// students.forEach((element, index) => {
//     console.log(element + "-" + index);
// });

// for (let item of students) {
//     console.log(item);
// }

// for (const key in users) {
//     console.log(users[key].email);

//     if (users[key].email == "eshqin@code.edu.az") {
//         console.log(users[key].password);
//     }

//     if (users[key].name == "Cavid") {
//         console.log(users[key].email);
//     }

//     if ( users[key].surname == "Aliyev" ) {
//         console.log(users[key].email);
//     }
// }

// for (const item of users) {
//     for (const key in item) {
//        console.log(key);
//     }
// }

// let book ={
//     name:"Xosrov",
//     author:"Nizami",
//     pageCount: 500
// }
// for (const key in book) {
//    console.log(book[key]);
// }
// let students1 = ["Orxan","Fidan","Emil","Seid"];

// let students = ["Ayxan","Azer","Huseyn","Sadiq"];

// getStudents(students1);


// function getStudents(t,m,...arr) {
//     for (const item of arr) {
//         console.log(item);
//     }

//     console.log(t + "-t");
//     console.log(m + "-m");
// }


// getStudents("Ayxan","Azer","Huseyn","Sadiq")




// function sumEvenNums(...arr) {    // Params version
//     let sum = 0;
//     for (const item of arr) {
//         if (item %2 == 0) {
//             sum += item;
//         }
//     }
//     return sum;

// }
// console.log(sumEvenNums(1,2,4,7,8,14));



// function evenNum(n) {
//     return n %2 == 0;
// }

// function oddNum(n) {
//     return n %2 != 0;
// }

// function threeNum(n) {
//     return n >= 3;
// }

// let evenNum = n =>  n %2 == 0;
// let oddNum = n => n % 2 != 0;
// let threeNum = n => n >= 5;

// function numsByConditions(arr, callback) {
//     let sum = 0;
//     for (const item of arr) {
//         if (callback(item)) {
//             sum += item
//         }
//     }
//     return sum;

// }
// console.log(numsByConditions([1,3,4,7,8], n =>  n %2 == 0));

// console.log(numsByConditions([1,3,4,7,8],oddNum));

// console.log(numsByConditions([1,3,4,7,8], n =>  n >= 5));


// function sumOddNums(arr,callback) {
//     let sum = 0;
//     for (const item of arr) {
//         if (callback(item)) {
//             sum += item;
//         }
//     }
//     return sum;

// }



// function sumthanThree(arr,callback) {
//     let sum = 0;
//     for (const item of arr) {
//         if (callback(item)) {
//             sum += item;
//         }
//     }
//     return sum;

// }




// console.log(multByConditions([1,3,4,7,8],evenNum));


// let numbers = [2, 3, 4, 6, 8, 11, 22, 55, 77, 83];

// let filteredArray = numbers.filter(m => m % 2 == 1);


// function sumNumbers(arr) {
//     let sum = 0;
//     for (const item of arr) {
//         sum += item;
//     }
//     return sum;

// }

// console.log(sumNumbers(numbers));


// let numbers = [2, 3, 4, 6, 8];

// console.log(numbers);

// numbers.forEach((item,index) => {
//     numbers[index] = item * 2;
// });
// console.log(numbers);

// let result = numbers.map(m=>m*m);

// console.log(result);



// let users = [
//     {name: "Ayxan", surname: "Nabatov", age: 23},
//     {name: "Orxan", surname: "Ekberov", age: 26},
//     {name: "fidan", surname: "Mardanli", age: 17}
//    ];

//     let date = new Date();
//     // console.log(date);

//     let result = users.map(m=>{
//         return {
//             fullName:`${m.name} ${m.surname}`,
//             yearOfBirth: date.getFullYear() - m.age
//         }
      
//     })

    
//     console.log(result);
    