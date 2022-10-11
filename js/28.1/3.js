let weight = prompt("Enter a Weight : ");
let height = prompt("Enter a height : ");
bmi = (weight / Math.pow( (height/100), 2 ));
if(bmi<18.5){
    console.log("under weight")
}
if ( bmi > 24.9) {
    console.log("normal")
}

else{
   console.log("Fat")
}