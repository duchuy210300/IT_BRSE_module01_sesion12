let array = [];
for(let i = 0 ; i <= 100; i++){
    array.push(i);
};
    console.log(array);
let boDem = 0; // 20 số nguyên tố đầu tiên. chạy Bộ Đếm đến 20  
let newArray = array.filter(
    function(n){
        if(boDem >= 20){
            return false;
        }
        if(n < 2){
            return false;
        }
        for(let i = 2; i <= Math.sqrt(n); i++){
            if(n % i === 0){
                return false;
            }
        }
            boDem++;

            return true;
            }
    
    );

console.log(newArray);