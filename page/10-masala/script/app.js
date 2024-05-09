function value(indexText) {
    for(let i = 0; i< indexText.length; i++) {
         var char = String.fromCharCode(indexText[i])
         if('a, e, i, o, u'.indexOf(char) !== -1) {
              indexText[i] = char
         }
    }
    return indexText
}
let result = value(["e",121,110,113,113,103,121,121,"e",107,103]);
console.log(...result)