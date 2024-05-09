// function scramble(str, arr) {
//     // do teh codes
       
//        for(var change=[],i=0;i<arr.length;i++){
//              change[arr[i]]=str[i]
//        }
//        return change.join("")
  
  
//   let result = alpha('abcd', [0,3,1,2])
//   };

//   let result = scramble('abcd', [0,3,1,2])

//   console.log(result)

function scramble(str, arr) {
    // do teh codes
    let res = []
      for(let i = 0; i < arr.length; i++){
            res[arr[i]] = str[i]
      }
       return res.join("")
  };
  let result = scramble('abcd', [0,3,1,2])

  console.log(result)