//This first function checks a letter and returns the corresponding cipher letter from the alphabet

function letter(l) {
  let arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 
  'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  
  if(arr.indexOf(l) < 13) {
    return arr[26 - (13-(arr.indexOf(l)))];
  }else {
    return arr[arr.indexOf(l) - 13];
  }
}

//This function accepts the input word and processes it character by character 

function rot13(str) {
  str = str.split("");

  for(let i = 0; i < str.length; i++) {
    if(/[\w]/.test(str[i])) {
      str[i] = letter(str[i]);
    }
  }
  return str.join("");
}
