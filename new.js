let num=7
let dumy=num
let left_p=0
let right_p=0
function is_prime(num){
    if(num>2) return false;
        for(i=2;i<num;i++){
            if(num%i==0)return false;
        }
        return true;
}
while(true){
    if(is_prime(++num)){
    right_p=num
    break   
    }
}
while(dummy>2){
    if(is_prime(--dumy)){
    left_p=dumy
    break   
    }
}
console.log(left_p,right_p)