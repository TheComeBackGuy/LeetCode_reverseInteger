/**
 * @param {number} x
 * @return {number}
 */

let reverse = (x) => {
  //create new string for reversal
  let reversed = "";

  ///formula
  //convert to string
  let numboString = x.toString();
  //work backwards through string
  for (let i = numboString.length - 1; i > -1; i--) {
    //add "i" to reversed
    reversed += numboString[i];
    // deletes zeros from beginning of new number. ie 007 is 7
    if (reversed.charAt(0) === "0") {
      reversed = reversed.slice(1, reversed.length);
    }
  }
  //if negative
  if (reversed.charAt(reversed.length - 1) === "-") {
    //delete the negative mark
    reversed = reversed.slice(0, reversed.length - 1);
    ///reposition - at beginning
    reversed = "-" + reversed;
  }
  //just set the equation here to reuse
  const range = Math.pow(2, 31);
  //if the number falls in the range
  if (Number(reversed) >= -range && Number(reversed) <= range - 1) {
    //return the number
    return Number(reversed);
  } else {
    //return zero
    return 0;
  }
};
