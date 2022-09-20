function prime_prob(num){
    let count=0;
   for(let i=0; i<=num; i++){
       if(num%i==0){
           count++;
       }
      
   } return count;
}
let C1=prime_prob(11);
if(C1==2){
    console.log("Prime"); 
}else{
    console.log("Not a prime")
}