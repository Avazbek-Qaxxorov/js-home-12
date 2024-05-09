// function missingWord(nums, str) {
//     // Jenny needs your help...
//     var result = "";
//     var string = str.split(" ").join("");
//     nums.sort((a,b) => a - b);
//     nums.forEach(function(x){ 
//       if(string[x]){
//         result += string[x].toLowerCase();
//       }else{
//         result = "No mission today";
//       }
//     });
//     return result;
//   }

//   let result = missingWord([2, 3, 1, 5], "I love JavaScript");

//   console.log(result)

function missingWord(nums, str) {

  str = str.replace(/ /g, "");
  nums = nums.sort((a, b) => a - b);
  let result = ""
  for (let i = 0; i < nums.length; i++) {
    console.log(nums, nums[i]);
    result += str[nums[i]]
    if (nums[i] > str.length){
      return "No mission today";
    }
  }
  return result.toLowerCase()
}

let result = missingWord([5,0,3], "I love you");

console.log(result)