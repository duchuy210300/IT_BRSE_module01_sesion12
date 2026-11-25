let a = 0;
let b = 1;
let sum = 0;
for(let i = 0; i <= 10 ; i++){
     console.log(a);
     sum= a + b;
    a = b;
    b = sum;

}
//Bài 2: Tính giai thừa của một số nguyên dương
console.log("----------------------------Bài 2:-----------------------------------");

let positiveInteger = parseInt(+prompt("Hãy nhập số nguyên duong (bài tập 2)"));
let giaiThua = 1 ;
for(let i = 1; i <=positiveInteger; i++){
    giaiThua = giaiThua * i;
}
console.log(`kết quả giai thừa của ${positiveInteger} là ${giaiThua}`);
//Bài 3: In tam giác vuông. Các góc vuông nằm ở các vị trí khác nhau
console.log("----------------------------Bài3:-----------------------------------");
let n = 5;
for(let i = 1; i<=n; i++){
    let current = "";
    for(let k = 1; k <= i; k++){
        current = current +"*";
    }
    console.log(current);
};
console.log("----------------------------------------------------");
for(let i = n; i >=1; i--){
    let current = "";
    for(let k = 1; k <= i; k++){
        current = current +"*";
    }
    console.log(current);
};
console.log("----------------------------------------------------");
for(let i = 1; i<=n; i++){
    let current = "";
    for(let j = 1; j <= n-i; j++){
        current = current + " ";
    }
    for(let k = 1; k <= i; k++){
        current = current + "*" ;
    }
    console.log(current);
};
console.log("----------------------------------------------------");
for(let i = n; i >= 1; i--){
    let current = "";
    for(let j = 1; j <= n-i; j++){
        current = current + " ";
    }
    for(let k = 1; k <= i; k++){
        current = current + "*";
    }
    console.log(current);
};
console.log("----------------------------------------------------");
//Bài 4: In hình chữ nhật rỗng
console.log("----------------------------Bài4:-----------------------------------");
let m =  7;
for(let i = 1; i <= m; i++){
    let current = "";
    switch (i) {
        case 1: for(let k = 1; k <= 21; k++){
        current = current + "*";
    }
         break;
        case m :for(let k = 1; k <= 21; k++){
        current = current + "*";
    }
        break;
        default:
              current = current +"*";
         for(let k = 1; k < 19; k++){
        current = current + " ";
            }
              current = current +"*";

        }
    
   console.log(current);

};
//Bài 5: Viết chương trình tính lãi ngân hàng (lãi mẹ đẻ lãi con) khi biết số tiền ban đầu, số tháng cho vay và lãi suất hàng tháng.
console.log("----------------------------Bài5:-----------------------------------");
let _b = +prompt("Nhập số tiền bạn muốn gửi");
let t = +prompt("Số tháng bạn muốn gửi");
let coefficient = 0.01 * +prompt("Nhập lãi suất %");
let interest = 0;
let sumEnd = 0;
for(let i = 1; i <= t; i++){
    sumEnd = _b * ((1 + coefficient) ** i);
    interest = sumEnd - _b;
    console.log(`Số tiền lãi qua tháng thứ ${i} là: ${interest.toFixed(3)}  `);
    console.log(`Số tiền qua tháng thứ ${i} là: ${sumEnd.toFixed(3)}`);
}

