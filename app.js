function reverseString (str) {
    let newWord = str.split("").reverse().join("");
    console.log(newWord);
}
reverseString("ugo");



function palindrome (str) {
  if (str === str.split('').reverse().join('')){
      console.log(true)
  } else{
      console.log(false)
  }
};

palindrome('racecar');


function vowCons(str) {
  let vowel = 'aeiou';
  let consonant = 'bcdfghjklmnpgrstvwxyz';

  let vowNum = 0;
  let consNum = 0;
   
  for (let i=0; i<str.length; i++){
      for (let j=0; j<vowel.length; j++){
         if (str[i]==vowel[j]){
             vowNum++;
         }
      }
      for (let k=0; k<consonant.length; k++){
          if (str[i]==consonant[k]){
              consNum++;
          }
      }
  }
   if (vowNum>consNum){
       console.log('vowels win')
   }else if (vowNum<consNum){
       console.log('consonants win')
   }else if (vowNum==consNum){
       console.log('draw')
   }
}
vowCons('ugochukwu')