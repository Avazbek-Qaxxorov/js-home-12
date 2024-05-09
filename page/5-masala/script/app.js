function twoSort(s) {
    s.sort()
    return s[0].split('').join("***")
}

let result = twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]);

console.log(result)