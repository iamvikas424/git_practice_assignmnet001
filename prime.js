function checkprime(num){
if(num<=1|| num==undefined){
return false;
}
for(let i=2;i<=num**(0.5);i++){
if(num%i==0){
return false;
}

}
return true;
}
let x=checkprime();
if(x==true){
console.log(num,"is prime number")
}else{
console.log(num,"is not prime number")
}