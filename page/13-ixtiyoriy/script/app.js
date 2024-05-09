function twosDifference(input) {
    input = input.sort((a, b) => a - b)
    let arr = [];
    for (let i = 0; i < input.length; i++) {
        if(input.includes(input[i] + 2)) {
         arr.push([input[i], input[i] + 2])   
        }
    }
    return arr
}

let result = missingWord([2, 3, 1, 5]);

console.log(result)


