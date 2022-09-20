function prime_problem(num){
    let count=0;
   for(let i=0; i<=num; i++){
       if(num%i){
           count++;
       }
      
   } return count;
}
let C1=prime_problem(11);
if(C1==2){
    console.log("Prime"); 
}else{
    console.log("Not a prime")
}