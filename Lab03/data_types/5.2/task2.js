alert( 6.35.toFixed(20) ); // 6.34999999999999964473
//The precision loss can cause both increase and decrease of a number.
// In this particular case the number becomes a tiny bit less, that’s why it rounded down.

alert( 1.35.toFixed(20) ); // 1.35000000000000008882

//Here the precision loss made the number a little bit greater, so it rounded up.
//We should bring it closer to an integer prior to rounding:

alert( (6.35 * 10).toFixed(20) ); // 63.50000000000000000000

//Note that 63.5 has no precision loss at all. That’s because the decimal part 0.5 is actually 1/2. 
// Fractions divided by powers of 2 are exactly represented in the binary system, now we can round it:

alert( Math.round(6.35 * 10) / 10 ); // 6.35 -> 63.5 -> 64(rounded) -> 6.4
