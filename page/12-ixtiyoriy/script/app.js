function juftJuftlar(massiv) {
    const juftSoniQator = [];
    const toqSoniQator = [];
    
    for (let son of massiv) {
        if (son % 2 === 0) {
            juftSoniQator.push(son);
        } else {
            toqSoniQator.push(son);
        }
    }
    
    juftSoniQator.sort((a, b) => a - b);
    toqSoniQator.sort((a, b) => a - b);
    
    const natija = [];
    const minLength = Math.min(juftSoniQator.length, toqSoniQator.length);
    for (let i = 0; i < minLength; i++) {
        natija.push([toqSoniQator[i], juftSoniQator[i]]);
    }
    
    return natija;
}

console.log(juftJuftlar([1, 2, 3, 4]));  