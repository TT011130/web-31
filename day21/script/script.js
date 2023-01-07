/*const script = document.createElement("script");
script.src = "https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js";

document.body.append(script);

script.onload = function () {
    console.log(_.concat([1, 2], [3, 4]));
};

script.onerror = function () {
    console.log("Không thể tải được");
};

//const success = function(data) {};
//
//const error = function (reason) {};

//Error First
const handleResult = function (error, data) {
    if (error) {
        console.log("Error:", error);
    } else {
        console.log("Got:", data);
    }
};

const doSomething = function(callback) {
    setTimeout (() => {
        const data = Math.floor(Math.random() * 100);

        if (data < 50) {
            callback(null, data);
        } else {
            callback("Giá trị không phù hợp");
        }
    }, 3000);
};

console.log("Before");

doSomething(handleResult);

console.log("After");

//const doA = function (callback) {

//};

doA(function (error, data){
    if (error) {

    } else {

        doB(function (error, data) {
            if (error) {

            } else {

                doC(function (error, data) {
                    if (error) {
        
                    } else {

                    }
                })
            }
        })
    }
});*/

//Pyramid of DOM
//Callback Hell

//ES6 - Promise
//ES7 - Async/Await => Bản cải tiến của Promise => Kết hợp với try catch

let doA = async function () {
    console.log("Do A");
    const result = await doB(); // return new Promise()...
    return result; // resolve(result);
    //return new Promise(function (resolve, reject){
    // executor => trình thực thi
   // setTimeout (() => {
    //    resolve(1);
    //}, 3000);
    //});
}

let doB = async function (valueFromA) {
    console.log("Do B");
    console.log("Got data from A", valueFromA);
    return 1; // => promise => resolve(1);
    //return new Promise(function (resolve, reject){
    // executor => trình thực thi
    //setTimeout (() => {
       // resolve(10);
    //}, 3000);
//});
}

let doC = function (valueFromB) {
    console.log("Do C");
    console.log("Got data from B", valueFromB);
    return new Promise(function (resolve, reject){
    // executor => trình thực thi
    setTimeout (() => {
        resolve();
    }, 3000);
});
}

let doD = function () {
    console.log("Do D");
    return new Promise(function (resolve, reject){
    // executor => trình thực thi
    setTimeout (() => {
        resolve();
    }, 3000);
});
}

doA().then(doB).then(doC).then(doD).catch(function (reason) {
    console.log(reason);
}).finally(function () {});

try {
    const resultA = await doA();
    const resultB = await doB(resultA);
    const finalResult = await doC(resultA, resultB);
    console.log(finalResult);
} catch (err) {
    console.log("Error: ", err);
} finally {

};


// Đồng bộ dữ liệu với phía server
// Gọi API
// Cú pháp: fetch(url, options)

const toPostcard

try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
} catch (err) {
    console.log("Lỗi"), err;
}

