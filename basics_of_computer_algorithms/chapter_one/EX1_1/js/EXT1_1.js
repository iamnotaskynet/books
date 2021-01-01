const readline = require('readline');

let A, B, C, D;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

new Promise( (resolve) => { 
    rl.question('A? ', (entered_A) => {
        A =  parseFloat(entered_A);
        rl.question('B? ', (entered_B) => {
            B =  parseFloat(entered_B);
            rl.question('C? ', (entered_C) => {
                C =  parseFloat(entered_C);
                resolve();
                rl.close();
            });
        });
    });

}).then( ()=> {
    D = B*B - 4*A*C;
}).then( ()=> {
    if( D == 0) console.log(`Equation have one solution: ${-B/(2*A)}`);
    else if ( D > 0) console.log(`Equation have two solutions: ${(-B + D)/(2*A)} ${(-B - D)/(2*A)}`);
    else console.log(`Equation have no solutions.`);
});