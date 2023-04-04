// function isPalindrome(x) {
//     let arr = []
//     let reversed = isPalindrome.
//     for (let i = 0 ; i < x.length ; i++){
        

        
//     }
   
//   }

//   console.log(isPalindrome("aaa"))



function isPalindrome(x) {
    // your code here
  }

  function isPalindrome(x) {
    if(!x || x.length < 2 ||
            typeof x!== 'string') {
        return 'Not valid';
    }
    const revArray = [];
    const length = x.length - 1;
    for(let i = length; i >= 0; i--) {
        revArray.push(x[i]);

    }
      var answer = revArray.join('');
      answer
    if (answer == x){
        return true;
        
    }
    
    
    else {
        return false
    }
}
  
console.log(isPalindrome("madam"))
