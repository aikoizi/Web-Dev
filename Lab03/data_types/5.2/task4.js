let i = 0;
while (i != 10) {
  i += 0.2;
}
//That’s because i would never equal 10.

/*
let i = 0;
while (i < 11) {
  i += 0.2;
  if (i > 9.8 && i < 10.2) alert( i );
}
*/

//None of them is exactly 10.
//Such things happen because of the precision losses when adding fractions like 0.2.

