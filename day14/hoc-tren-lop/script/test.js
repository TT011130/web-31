let x = 12.012834945;
//một số cũng được coi là 1 đối tượng và có công thức của riêng nó

console.log(x.toString(2));

//trong khoảng 0 - 10
//Math.floor((Math.random() - min) * (max - min)) + min;
Math.floor(Math.random() * 10);

// trong khoảng 10 - 100
Math.floor(Math.random() * 90) + 10

let myName = "Thành";

// Có tính chất tương tự mảng
// ["T", "h", "à", "n" ,"h"]
// myName.reverse(), .splice(), ... (các hàm sửa đổi mảng) - không có tác dụng
console.log(myName[2]);
console.log(myName.length);

let now = new Date();
console.log(now); // YYYY-MM-DD-HH:mm:ss 

let birthday = new Date("1998-11-01");
console.log(birthday);

birthday.getFullYear();
birthday.getDate();

birthday.getMonth(); // 0 - 11
birthday.getDay(); // 0 - 6

//set
//khi giá trị vượt quá giới hạn sẽ tự động (cộng trừ) bù trừ 

birthday.setMonth(); // 0 - 11

