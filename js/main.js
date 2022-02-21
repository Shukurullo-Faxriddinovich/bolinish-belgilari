var a = prompt("sonni kiriting");
console.log(a);

if(a % 3 == 0 && (a % 5 == 0)){
  console.log("bu son 3 ga ham 5 ga ham bo'linadi");
}

else if (a % 3 == 0){
  console.log("bu son 3 ga bo'linadi");
}
else if(a % 5 == 0){
  console.log("bu son 5 ga bo'linadi");
}

else{
  console.log("xato");
}