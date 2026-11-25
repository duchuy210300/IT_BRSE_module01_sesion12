// baif 1: Chuyển từ độ C sang độ F.
const temperatureC = +prompt("Hãy nhập nhiệt độ C muốn đổi thành độ F");
const temperatureF = temperatureC * 9 / 5 + 32;
alert(`Kết quả là: ${temperatureF}(F)`);
//Bài 2: Chuyển từ mét sang feet
const m = +prompt("Hãy nhập chiều dài (m) mà bạn muốn đổi thành feet");
const feet = m * 3.28084;
alert(`Kết quả quy đổi là : ${feet}(feet)`);
// Bài 3: tính diện tích hình vuông khi biết cạnh a
const squareA = +prompt("Nhập độ dài cạnh hình vuông");
const acreageSquare = squareA ** 2;
alert(`Diện tích hình vuông là: ${acreageSquare}`);
//Bài 4 :Tính diện tích hình chữ nhật khi biết 2 cạnh a, b.
const rectangleA = +prompt("Nhập độ dài cạnh dài hình chữ nhật");
const rectangleB = +prompt("Nhập độ dài cạnh ngắn hình chữ nhật");
const acreageRectangle = rectangleA * rectangleB;
if (rectangleA !== rectangleB) {
    alert(`Diện tích hình chữ nhật là : ${acreageRectangle}`);
} else {
    alert(`Độ dài bạn nhập là hình vuông
        có diện tích là: ${acreageRectangle}`);
    
};
//Bài 5: Tính diện tích tam giác vuông khi biết 02 cạnh kề a, b
const triangleA = +prompt("Nhập độ dài cạnh dài hình tam giác vuông");
const triangleB = +prompt("Nhập độ dài cạnh ngắn hình tam giác vuông");
const acreageTriangle = (triangleA * triangleB) / 2;
if (triangleA > 0 && triangleB >0 && triangleA !== triangleB) {
 alert(`Diện tích hình tam giác vuông là : ${acreageTriangle}`);
} else if (triangleA > 0 && triangleB >0 && triangleA === triangleB) {
 alert(`Diện tích hình tam giác vuông là : ${acreageTriangle}
Tam giác bạn nhập còn là tam giác cân`);
} else {
    alert("Dữ liệu bạn nhập không đúng");   
};
//Bài 06:Giải phương trình bậc 1.
const a = +prompt("Nhập hệ số a cho phương trình ax + b = 0");
const b = +prompt("Nhập hệ số b cho phương trình ax + b = 0");
const first_degreeEquation = (- b) / a;
if (a !== 0) {
    alert(`Phương trình có nghiệm là: ${first_degreeEquation}`);
} else if(a === 0 && b===0) {
    alert(`Phương trình vô số nghiệm`);
} else {
    alert("Phương trình vô nghiệm");
};
//Bài 7: Giải phương trình bậc 2.
 const A = +prompt("Nhập hệ số A cho phương trình Ax² + Bx + C = 0");
 const B = +prompt("Nhập hệ số B cho phương trình Ax² + Bx + C = 0");
 const C = +prompt("Nhập hệ số C cho phương trình Ax² + Bx + C = 0");
 const delta = Math.pow(B, 2) - 4 * A * C;
 if (A === 0){
    alert("A # 0 thì mới thành phuong trình bậc 2")
 }else{
    if (delta > 0) {
   let x1 = ((- B) + Math.sqrt(delta)) / (2 * A);
   let x2 = ((- B) - Math.sqrt(delta)) / (2 * A);
    alert(`Phương trình có hai nghiệm là : 
        ${x1}
        ${x2}`);
    
 } else if(delta === 0){
   let x = (- B) / (2 * A);
    alert(`Phương trình có nghiệm kép là :
        x1 = x2 = ${x}`);
 } else {
    alert("Phương trình vô nghiệm")
 };
 };
 //Bài 8 : Kiểm tra xem một số nhập vào có phải là tuổi của một người không.
 const age = parseFloat(+prompt("nhập số tuổi"));
 if(age > 0 && age <= 120){
    alert("Số tuổi " + age + " là số tuổi của con người")
 } else {
    alert("Số tuổi " + age +" này. Không phải số tuổi của một con người" )
 };
 





