// sort
// filter
// find
// findIndex 
// map
// reduce 
// ...

// Callback
// Truyền 1 hàm (giá trị hàm) vào một hàm khác dưới dạng đối số

function demo() {
    
}

demo; // giá trị hàm
demo(); // cuộc gọi hàm

let other = function() {
    console.log("Other");
};

console.log(demo); // giá trị hàm


function doSomething (callback) {
    const data = 10;

    callback(data);
}

doSomething(demo); // demo = callback

// khai báo trực tiếp tại vị trí sử dụng
let x = 123;

let others = function() {}

doSomething(x);
doSomething(other);
doSomething(function () {

})

// forEach - làm một cái gì đó với mỗi phần tử trong mảng
function pow(n) {
    console.log(n ** 2); 
}

arr = [1, 3, 5, 7, 123, 10];
for (i = 0; i < arr.length; i++) {
    pow(arr[i]);
}

arr.forEach(pow);

const ar = ["Ba", "Phong", "Minh", "Tài", "Tùng", "Đức Anh"]
for (i = 0; i < arr.length; i++) {
    console.log(ar[i]);
}

ar.forEach(console.log);

// find - tìm ra GIÁ TRỊ ĐẦU TIÊN KHỚP VỚI ĐIỀU KIỆN
const arrr = [10, 15, 12, 11, 9, 19, 17];

function isPrime(n) {
    if (n < 2) return false;

    for (let i = 2; i < n; i++) {
        if (n % i == 0) return false;
    }

    return true;
}

//let firstPrime;

//for (let i = 0; i < arrr.length; i++) {
//  const n = arrr[i];

//    if (isPrime(n)) {
//        firstPrime = n;
//        break;
//    }
//}

//console.log(firstPrime);

let firstPrime = arrr. find(isPrime);

//filter - Tìm TẤT CẢ GIÁ TRỊ KHỚP VỚI ĐIỀU KIỆN
let arr1 = [];
for (let i = 0; i < arrr.length; i++){
    if (isPrime(arrr[i])) {
        arr1.push(arr[i]);
    }
}
console.log(arr1);

let resule = arrr.filter(isPrime);
console.log(result);

//findIndex - Tìm chỉ mục của giá trị đầu tiên khớp với điều kiện
let index = -1;
for (let i = 0; i < arrr.length; i++){
    if (isPrime(arrr[i])) {
        index = i;
        break;
    }
}

console.log(index);

let indexx = arrr.findIndex(isPrime);
console.log(indexx);

// map - Biến đổi các phần tử trong mảng thành 1 giá trị khác

function double(n) {
    return n * n;
}

let doubleArr = [];
for (let i = 0; i < arrr.length; i++){
    doubleArr.push(double(arrr[i]));
}

console.log(doubleArr);

let doubled = arrr.map(dounble);
console.log(doubled);

// reduce - tính tổng
let total = 0;
for (let i = 0; i < arrr.length; i++){
    total += arrr[i];
}
console.log(total);

function add(agiatritichluy, bphantutrongmang) {
    return agiatritichluy + bphantutrongmang;
}

let sum = arrr.reduce (add, 0);
console.log(sum);

// sort = sắp xếp
const arrrr = [10, 15, 12, 11, 9, 19, 17];

// sort - mặc định sắp xếp theo dạng chuỗi
//arrrr.sort();

function compare(a, b){
    //số dương (1) nếu a lớn hơn b
    //số âm (-1) nếu a nhỏ hơn b
    if (a >= b) return 1;
    else return -1;
}

arrrr.sort(compare);
console.log(arrrr);