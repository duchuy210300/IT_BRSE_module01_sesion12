//Bài 1:Sử dụng vòng lặp để đếm từ 1 đến 100. Khi số là 99, hiển thị hộp thoại thông báo là đã hoàn thành.
for(let i = 1; i< 100; i++){
   console.log(i);
   switch (i) {
    case 99: console.log("Đã hoàn thành")
        
        break;
   }
};
//Bài 2:Sử dụng hàm prompt() để lấy thông tin nhiệt độ hiện tại được nhập bởi người truy cập. Nếu nhiệt độ nhập vào trên 100, yêu cầu người dùng giảm nhiệt độ. Nếu nhiệt độ dưới 20, yêu cầu người dùng tăng nhiệt độ. 
console.log("----------------------------Bài2:-----------------------------------");
const temperature = Number(prompt("Nhập nhiệt độ(Bài tập 2) "));
while(temperature < 20){
    console.log("yêu cầu  tăng nhiệt độ.");
    break;
};
while(temperature > 100){
    console.log("yêu cầu  giảm nhiệt độ.");
    break;
};
//Bài 3:Hiển thị ra 20 số trong dãy fibonacci đầu tiên.
console.log("----------------------------Bài3:-----------------------------------");

let a = 0;
let b = 1;
let i = 0;
let sum = 0;
let dungLenh = true;
while(i <20){
    console.log(a);
    sum = a + b;
    a = b;
    b = sum;
    i++;
    while(b % 5 ===0 && dungLenh === true){
       console.log("số đầu tiên trong dãy fibonacci chia hết cho 5 là:", b);
       dungLenh = false;
       break;//Bài 4: Tìm số đầu tiên trong dãy fibonacci chia hết cho 5.
    }
};
    console.log("Tổng cần tìm là:",sum);//Bài 5: Tính tổng của 20 số đầu tiên trong dãy fibonacci.
//Bài 6: Tính tổng của 30 số chia hết cho 7 đầu tiên trong các số tự nhiên.
console.log("----------------------------Bài6:-----------------------------------");

let naturalNumber = 0;
let total = 0;
let jump = 0;
while(jump < 30){
    total += naturalNumber;
    naturalNumber += 7;
    jump++;
   }
console.log("Tổng của 30 số chia hết cho 7 đầu tiên trong các số tự nhiên là: ", total)
//Bài 7: Hãy viết một chương trình in ra các số từ 1 đến 100. Nhưng nếu số chia hết cho 3 thì in ra "Fizz", 5 thì in ra "Buzz" thay vì in ra số đó. Và nếu số đó chia hết cho cả 3 và 5 thì in ra chữ “FizzBuzz”
console.log("----------------------------Bài7:-----------------------------------");

for(let i = 1; i <= 100 ; i++ ){
    console.log(i);
    while(i % 3 === 0 && i % 5 !==0){
    console.log("Fizz");
    break;
    }
    while(i % 5 === 0 && i % 3 !==0){
    console.log("Buzz");
    break;
    }
    while(i % 5 === 0 && i % 3 ===0){
    console.log("FIZZBuzz");
    break;
    }
}