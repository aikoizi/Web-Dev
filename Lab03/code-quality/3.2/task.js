function pow(x, n){
  let result = 1;   // <- no spaces before or after =
  for(let i=0;i<n;i++){
    result *= x;
}   // <- no spaces
  // the contents of { ... } should be on a new line
  return result;
}

let x = prompt("x?",'');
n = prompt("n?",'');// ;
// but better make it 2 lines, also there's no spaces and missing ;
if (n <= 0){   
  // below - long lines can be split into multiple lines for improved readability
  alert(`Power ${n} is not supported,
    please enter an integer number greater than zero`);
} else {
    alert( pow(x,n) );//;
}