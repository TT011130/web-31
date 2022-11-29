function sumOfNumbers(n) {
    let total = 0;
    for (let i = 0; i <= n; i++) {
     total += i;
    }
    console.log(total);
 }
 console.log(sumOfNumbers(15));
 
 /**
  * Tính tổng các số lẻ trong khoảng từ `start` đến `end`
  *
  * @returns {number} Tổng các số lẻ
  */
 function sumOfOddNumbers(start, end) {
     let totalOfOddNumbers = 0;
     for (let i = start; i <= end; i++) {
         if (i % 2 != 0) {
            totalOfOddNumbers += i;
         }
     }
     console.log(totalOfOddNumbers);
 }
 console.log(sumOfOddNumbers(1, 15));  

function divisor(number) {
    for (let i = 0; i <= number; i++) {
        if (number % i === 0) {
            console.log(i);
        }
    }
}
console.log(divisor(5));

function countFolding(thickness) {
    let presentThickness = 0.1;
    let times = 0;
    let i = 0;
    while (presentThickness <= thickness){
        presentThickness = presentThickness * 2;
        times += i;
        i++;
    }
    console.log(i);
}
console.log(countFolding(10));

function countYears(dad, son) {
    let presentDad = 0;
    let presentSon = 0;
    for (i = 0; i <=100; i++){
        presentDad = dad + i;
        presentSon = son + i;
        if ((dad - son >= 18) && (presentDad / presentSon === 2)) {
            console.log(i);
        }
    }
   
}
console.log(countYears(40, 4));