function prime_problem(number){
    let count=0;
   for(let i=0; i<=number; i++){
       if(number%i==0){
           count++;
       }
      
   } return count;
}
let factors=prime_problem(11);
if(factors==2){
    console.log("Prime"); 
}else{
    console.log("Not a prime")
}