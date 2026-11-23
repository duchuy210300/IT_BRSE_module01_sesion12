//bài 1 : hai số chia hết cho nhau
const a = +prompt("nhập số a");
const b = +prompt("nhập số b");
if (a % b === 0) {
    alert("Số a chia hết cho b")
} else {
    alert("Số a không chia hết cho b")
};
//Bài 2 : Nhập tuổi và và cho biết học sinh đủ điều kiện vào lớp 10 hay không
const age = Math.abs(Math.floor(+prompt("Nhập số tuổi của bạn")));
if (age >= 16 && age < 20) {
    alert("Bạn đủ điều kiện vào lớp 10")
} else if (age < 16) {
    alert("Bạn chưa đủ điều kiện vào lớp 10")
} else {
    alert("bạn quá tuổi để vào lớp 10")
};
//Bài 3 : nhập số nguyên bất kì và so sánh với 0
const integer = parseInt(+prompt("Nhập số nguyên mà bạn muốn so sánh với 0"));
if (integer > 0) {
    alert("Số bạn nhập lớp hơn 0")
} else if (integer = 0) {
    alert("Bạn đã nhập số 0")
} else {
    alert("Số bạn nhập nhỏ hơn 0")
};
// Bài 4: nhập ba số nguyên
const firstNumber= parseInt(+prompt("nhập số nguyên thứ 1"));
const secondNumber= parseInt(+prompt("nhập số nguyên thứ 2"));
const thirdNumber= parseInt(+prompt("nhập số nguyên thứ 3"));
alert(`Số lớn nhất là : ${Math.max(firstNumber,secondNumber,thirdNumber)} 
Số bé nhât là : ${Math.min(firstNumber,secondNumber,thirdNumber)}`) ;
//Bài 5 : Xếp hạng học lức của học sinh
function xepLoaiHocLuc(name,point15,point45,giuKy,cuoiKy){
    return{
    "Họ và tên" : name,

    "Điểm thi 15p" : point15,
    "Điểm thi 45p" : point45,
    "Điểm thi giữa kỳ" : giuKy,
    "Điểm thi cuối kỳ" : cuoiKy,
    "xếp hạng học lực" : function(){
        return (point15 + point45 * 2 + giuKy * 3 + cuoiKy * 4) / 10;
    }
}};
 let name = prompt("Nhập tên học sinh");
 const point15 = parseFloat(+prompt("Nhập số điểm bài kiểm tra 15p của học sinh" + " " + name));
 const point45 = parseFloat(+prompt("Nhập số điểm bài kiểm tra 45p của học sinh" + " " + name));
 const giuKy = parseFloat(+prompt("Nhập số điểm bài thi giữa kỳ của học sinh" + " " + name));
 const cuoiKy = parseFloat(+prompt("Nhập số điểm bài thi cuối kỳ của học sinh" + " " + name)); 
 const student = xepLoaiHocLuc(name,point15,point45,giuKy,cuoiKy);
 
 for(let key in student){
    if (typeof student[key] !== "function") {
            alert(`${key} : ${student[key]}`);

    } else {
        const pointinteger = student["xếp hạng học lực"]();
        alert(`Điểm trung bình : ${pointinteger}`);
        if( pointinteger >= 9 && pointinteger <= 10){
            alert(`${key} : Học sinh Xuất Sắc`);
        }else if(pointinteger < 9 && pointinteger>=8 ){
            alert(`${key} : Học sinh Giỏi`);

        }else if(pointinteger < 8 && pointinteger>=7 ){
            alert(`${key} : Học sinh Khá`);
        }else if(pointinteger < 7 && pointinteger>=5 ){
            alert(`${key} : Học sinh Trung Bình`);
        }else {
            alert(`${key} : Học sinh Yếu`);
        }
    }
 };      

        


