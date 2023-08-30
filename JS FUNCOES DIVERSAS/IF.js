var primeiroNome = 'João';
let UltimoNome = 'Souza';
var segundoNome = "Tiago";

if (primeiroNome === 'João') { 
    var segundoNome = 'Pedro'; // Aqui está um erro de typo, onde 'segundoNome' deveria ser 'SegundoNome'.

let UltimosobreNome = 'Silva';
    console.log(segundoNome, UltimosobreNome); // Aqui, 'SegundoNome' e 'UltimosobreNome' estão sendo usadas corretamente.
}
console.log(primeiroNome, UltimoNome);