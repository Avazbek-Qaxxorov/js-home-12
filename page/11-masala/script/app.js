function ArrowFunc(array){
    return array.map(n => String.fromCharCode(n)).join('');
}
console.log(ArrowFunc([72, 73, 33]))