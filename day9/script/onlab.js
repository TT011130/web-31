/**
 * In dãy số lẻ trong khoảng từ 1 đến 100
 */
function printOddNumbers() {}

/**
 * In dãy số chẵn trong khoảng từ 1 đến 100
 */
function printEvenNumbers() {}

/**
 * Tính tổng các số tự nhiên trong khoảng từ 1 đến `n`
 * @param {number} n Số nguyên dương bất kỳ
 */
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
    let totalOfOddNumbers = o;
    for (let i = start; i <= end; i++) {
        if (i % 2 != 0) return totalOfOddNumbers += i;
    }
    console.log(totalOfOddNumbers);
}
console.log(sumOfOddNumbers(1, 15));

/**
 * Tìm các ước số của một số bất kỳ
 *
 * @param {number} number Số nguyên dương bất kỳ
 *
 * @returns {number[]} Mảng chứa các ước số *[v1, v2, ...]*
 */
function divisor(number) {
    let a = [];
    for (let i = 0; i <= number; i++) {
        if (number % i === 0) {
            console.log(a[1]);
        }
    }
}
console.log(divisor(5));

/**
 * Tính số lần gấp 1 tờ giấy có độ mỏng 0.1mm để đạt được độ dày mong muốn
 *
 * @param {number} thickness Độ dày mong muốn tính theo đơn vị m
 *
 * @return {number} Số lần gấp giấy để đạt được độ dày yêu cầu
 */
function countFolding(thickness) {
    let presentThickness = 0.1;
    let times = 0;
    let i = 0;
    while (presentThickness <= thickness){
        presentThickness = presentThickness * 2;
        times += i;
        i++;
    }
}
console.log(countFolding(1));

/**
 * Tính xem sau bao nhiêu năm nữa thì tuổi cha gấp 2 lần tuổi con
 *
 * Tuổi cha lớn hơn tuổi con ít nhất 18 tuổi
 *
 * @param {number} dad Tuổi của cha
 * @param {number} son Tuổi của con
 *
 * @returns {number} Số năm để tuổi cha gấp 2 lần tuổi con
 */
function countYears(dad, son) {
    let presentDad = 0;
    let presentSon = 0;
    let i = 0;
   while (dad - son >= 18){
        presentDad = dad + i;
        presentSon = son + i;
        presentDad / presentSon = 2;
        i++;
   }
   console.log(i);
}
console.log(countYears(23, 2));

