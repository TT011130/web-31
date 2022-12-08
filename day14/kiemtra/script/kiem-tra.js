/**
 * Tính số tiền điện theo công thức tính giá điện bậc thang như sau:
 * - Từ kWh thứ 0 đến 50: 1678đ/kWh
 * - Từ kWh thứ 51 - 100: 1734đ/kWh
 * - Từ kWh thứ 101 - 200: 2014đ/kWh
 * - Từ kWh thứ 201 - 300: 2536đ/kWh
 * - Từ kWh thứ 301 - 400: 2834đ/kWh
 * - Từ kWh thứ 401 trở đi: 2927đ/kWh
 *
 * @param {number} kwh - Số điện đã dùng trong tháng
 *
 * @return {number} Tiền điện phải trả
 *
 * @example
 * bill(100); // 170600
 */

/* Cách làm
 * Bước 1: Khai báo biến cost để giữ kết quả
 * Bước 2: Sử dụng hàm if để đặt điều kiện tính giá điện
 * Bước 3: Đặt công thức tính giá điện trong các hàm if
 * Bước 4: Trả về biến cost
 */
function bill(kwh){
	let fee = 0;
	// dùng if qua các trường hợp
	//Mức giá 1 0 - 50
	if (kwh >= 0 && kwh <= 50) {
		return fee =  kwh * 1678;
		}
	//Mức giá 2 51-100
    if ( kwh > 50 && kwh <= 100) { 
        return fee = 50*1678 + (kwh - 50)* 1734;
    }
	//Mức giá 3 101-200
    if ( kwh > 100 && kwh <= 200) {
    return fee = 50*1678 + 50 * 1734 + (kwh - 100)*2014;
  }
 //Mức giá 4 201-300
    else if (kwh > 200 && kwh<=300) {
 	    return fee = 50 * 1678 + 50 * 1734 + 100*2014 + (kwh-200)*2536;
 	}
 //Mức giá 5 301-400
    else if (kwh > 300 && kwh<=400) { 
 	    return fee = 50 * 1678 + 50 * 1734 + 100*2014 + 100*2536 + (kwh-300)*2834;
    }
 //Mức giá 6 401 trở lên
    else if (kwh > 400) { 
 	    return fee = 50 * 1678 + 50 * 1734 + 100*2014 + 100*2536 + 100*2834 + (kwh-400)*2927;
    }
    else console.log("Invalid number");
}
console.log(bill(401));
  
  /**
  * Cho một chuỗi time biểu thị thời gian dạng giờ:phút:giây (VD:
  '20:15:45'), và một số n bất kỳ, tính và trả về kết quả là một chuỗi
  biểu thị thời gian tương ứng sau n giây*
  * @param {string} time - Chuỗi biểu thị thời gian
  * @param {number} n - Số giây cần thêm (bớt)
  *
  * @return {string} Kết quả
  *
  * @example
  * calcTime('20:15:45', 15); // '20:16:00'
  * calcTime('20:15:45', -46); // '20:14:59'
  */

  // chuyển thành chuỗi
  // chuyển tất cả thành second
  // +n
  //chuyển lại thành giờ phút giây
  // 
function calcTime (time, n){
    let arr = time.split(":");
    let seconds = (+arr[0]) * 60 * 60 + (+arr[1]) * 60 + (+arr[2]); 
    let newSecond = seconds + n;
    let h = Math.floor(newSecond / 3600);
    let m = Math.floor(newSecond % 3600 / 60);
    let s = Math.floor(newSecond % 3600 % 60);
    console.log(`${h}` + `:` + `${m}` + `:` + `${s}`);
}
console.log(calcTime("20:30:10", 10));


  
  /**
  * Kiểm tra một chuỗi có phải đối xứng hay không (viết xuôi hay viết
  ngược đều giống nhau, không phân biệt chữ hoa chữ thường và không tính
  dấu cách)
  *
  * @param {string} str - Chuỗi bất kỳ
  *
  * @return {boolean} Kết quả
  *
  * @example
  * isPalindrome('Race car'); // true, vì Race car = racecar = racecar
  */
  
   
function isPalindrome(str) {

    // Tìm length của str
    const len = str.length;

    // lặp qua một nửa length của str
    for (let i = 0; i < len / 2; i++) {

        // kiểm tra xem nửa đầu có bằng nửa sau không
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }
    return true;
}

console.log(isPalindrome("Hello"));
  
  /**
  * Một con ốc sên leo từ đáy giếng lên miệng giếng, biết ban ngày leo
  được x mét, ban đêm lại bị tụt xuống y mét, hỏi sau bao nhiêu ngày thì
  ốc sên sẽ leo lên tới miệng giếng
  *
  * @param {number} h - Chiều cao của giếng (h > 0)
  * @param {number} x - Số mét leo được vào ban ngày (x > y)
  * @param {number} y - Số mét bị tụt xuống vào ban đêm (y > 0)
  *
  * @return {number} Số ngày cần để ốc sên leo lên được miệng giếng*
  * @example
  * snail(10, 3, 1); // 5
  */
  
  /* 
   * Khai báo biến để giữ giá trị
   * Sử dụng hàm if else để loại những giá trị nhập vào sai và nhận những giá trị đúng
   * Nhập công thức tính toán vào hàm else
   * Trả về biến 
   */
  function snail(h, x, y) {
    let day;
    if (x < y && y < 0 && h < 0) return "Invalid";
    else {
      day = h / (x - y);
    }
    return day;
  }
  console.log(snail(4, 2, 5));
  
  /**
  * Sắp xếp các chữ số trong một số nguyên dương bất kỳ để tạo ra số nhỏ
  nhất (giữ nguyên số chữ số ban đầu, bao gồm cả số 0)
  *
  * @param {number} n - Số nguyên dương bất kỳ
  *
  * @return {number} Số nhất nhất sau khi sắp xếp các chữ số
  *
  * @example
  * sortNumber(5307510); // 1003557
  */
  
  /* 
   * chuyển n sang chuỗi
   * chuyển sang mảng
   * sắp xếp qua 1 hàm arr2
   * trong hàm để sắp xếp: nếu ký tự a < b thì trả về -1 , ngược lại thì trả về 1
   *         để sắp xếp từ nhỏ tới lớn
   * dùng vòng lặp for và câu điều kiện if để đổi vị trí nếu số đầu tiên trong mảng là 0
   * chuyển mảng thành chuỗi sau đó chuyển chuỗi thành số
   */
  function sortNumber(n) {
    if (n < 0 && n % 2 !== 0) return "Invalid number";
    else {
      let str = n.toString();
      let arr1 = str.split("");
      let arr2 = arr1.sort(function (a, b) {
        if (a < b) return -1;
        else return 1;
      });
      for (let i = 1; i < arr2.length; i++) {
        if (arr2[0] == 0 && arr2[i] != 0) {
          let temp = arr2[0];
          arr2[0] = arr2[i];
          arr2[i] = temp;
          break;
        }
      }
      return Number(arr2.join(""));
    }
  }
  console.log(sortNumber(89123540));
  
  /**
  * Đếm số lần xuất hiện của mỗi phần tử trong mảng, nếu là chuỗi thì
  không phân biệt chữ hoa chữ thường
  *
  * @param {any[]} arr - Mảng chứa giá trị bất kỳ
  *
  * @return {Record<string, number>} object chứa kết quả, với key là giá
  trị trong mảng và value là số lần xuất hiện trong mảng
  *
  * @example
  * let result = countElement([1, true, 1, 1, true]);
  * console.log(result); // {1: 3, true: 2}
  *
  * @example
  * let result = countElement(['Ba', 'Béo', 'Ba']);
  * console.log(result); // {ba: 2, béo: 1}
  */
  
  /* 
   * dùng hàm toString và lowerCase để chuyển thành chuỗi và viết thường
   * khai báo đối tượng obj để giữ giá trị trả về
   * khai báo biến arr1 để giữ các phần tử trong mang arr sau khi xóa các phần tử bị trùng
   * sử dụng hàm filter , trong đó sử dụng if và hàm includes để tạo ra mảng mới mà các phần tử chỉ xuất hiện 1 lần
   * sử dụng vòng lặp for để đếm số lần lặp lại của phần tử và đưa các giá trị và số lần xuất hiện vào đối tương obj
   * trả về đối tượng obj
   */
  
  function countElement(arr) {
    for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i].toString().toLowerCase();
    }
    let obj = {};
    let arr1 = [];
    arr1 = arr.filter(function (item) {
      if (arr1.includes(item)) return "";
      else return arr1.push(item);
    });
    console.log(arr1);
    for (let i = 0; i < arr1.length; i++) {
      let count = 0;
      for (let j = 0; j < arr.length; j++) {
        if (arr1[i] == arr[j]) count++;
      }
      obj[arr1[i]] = count;
    }
    return obj;
  }
  console.log(countElement([3, 8, 2, 8, 1, 2, 1, 3]));