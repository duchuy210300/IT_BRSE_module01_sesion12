let name ="";
let age ="";
let running = true;
while(running){
    let chose = +prompt(`"Nhập một sự lựa chọn của bạn từ 1 đến 10"
        "1. Nhập tên" 
        "2. Nhập tuổi" 
        "3. In tên và tuổi" 
        "4. In bảng cửu chương" 
        "5. Kiểm tra chẵn lẻ" 
        "6. Tính tổng từ 1 đến N" 
        "7. In các số trong một dãy" 
        "8. Kiểm tra số nguyên tố" 
        "9. Đảo ngược chuỗi" 
        "10. Thoát"`)
    switch (chose) {
        case 1:
             name = prompt("Nhập tên của bạn");
            break;
        case 2:
             age = prompt("Nhập tuổi của bạn");            
            break;
        case 3:
            if(name !== "" && age !== "" && name !== null && age !== null){
                alert(`Tên của bạn là ${name}
                    Tuổi của bạn là ${age}`);
            }else{
                alert("Vui lòng hoàn thành lựa chọn 1 và 2")
            };
            
            break;
        case 4:
            let multiplicationTable = +prompt("Nhập bản cửu chương bạn muốn (từ 1 đến 10)");
            for(let i = 1; i <= 10; i++){
                let result = multiplicationTable * i;
                alert(`${multiplicationTable} * ${i} = ${result}`);
            }
            
            break;
        case 5:
            let checkNumber = +prompt("Nhập số cần kiểm tra chẵn lẻ");
            if(checkNumber % 2 === 0){
                alert(`Số bạn nhập vào (${checkNumber}) là số chẵn`);
            }else{ alert(`Số bạn nhập vào (${checkNumber}) là số lẻ`)};
            
            break;
        case 6:
            let inputNumber = +prompt("Nhập số N( tính tổng từ 1 đến N)");
            let sumNumber = 0;
            for(let i = 1; i <= inputNumber; i++){
                sumNumber = sumNumber + i;
            };
            alert(`Tổng từ 1 đến N là : ${sumNumber}`);

            break;
        case 7:
            let sequenceNumber = +prompt("Nhập số cần in dãy (hạn chế số lớn)");
            for(let i = 0; i<= sequenceNumber; i++){
                alert(i);
            }
            
            break;
        case 8:
            let intNumber = +prompt("Nhập số cần kiểm tra số nguyên tố");
            if(Number.isInteger(intNumber)){
                alert(`Số bạn nhập (${intNumber}) là số nguyên tố`);
            }else{ alert(`Số bạn nhập (${intNumber}) không phải là số nguyên tố`);
            };
            
            break;
        case 9:
            let reverseSequenceNumber = +prompt("Nhập số cần in dãy (hạn chế số lớn)");
            for(let i = reverseSequenceNumber; i >= 0; i--){
                alert(i);
            }

            break;
        case 10:
            running = false;
            break;

    
        default: 
            alert("Vui lòng chọn từ 1 đến 10");
            break;
    }
     
}
