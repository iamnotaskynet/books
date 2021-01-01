const readline = require('readline');
rl = readline.createInterface(process.stdin, process.stdout);

const pq = [];

const question_1 = () =>{
    return new Promise((resolve, reject) => {
        rl.question('P? ', (entered) => {
            if(parseFloat(entered) != 0) {
                pq[0] = parseFloat(entered);
                resolve();
            }
            else process.exit(1);   
        });
    });
};

const question_2 = () =>{
    return new Promise((resolve, reject) => {
        rl.question('Q? ', (entered) => {
            if(parseFloat(entered) != 0) {
                pq[1] = parseFloat(entered);
                resolve();
            } 
            else process.exit(1);   
        });
    });
};

const calculate = async () => {
    const [p, q] = [...pq];
    x_1 = (-p - Math.sqrt( p*p - 4*q))/2;
    x_2 = (-p + Math.sqrt( p*p - 4*q))/2;
    console.log(x_1, x_2);
};

const main = async () => {
    await question_1();
    await question_2();
    await calculate();
    rl.close();
    //process.exit(0);
}
  
main();
    
// const p1 = new Promise( (resolve, reject) => { 
//     rl.question('P? ', (entered) => {
//         if(parseFloat(entered) != 0) {
//             pq[0] = parseFloat(entered);

//             resolve();
//             rl.close();
//         }
//         else {
//             reject();
//             rl.close();
//         }
        
//     });
// });

// const p2 = new Promise( (resolve, reject) => { 
//     rl.question('Q? ', (entered) => {
//         if(parseFloat(entered) != 0) {
//             pq[1] = parseFloat(entered);

//             resolve();
//             rl.close();
//         }
//         else {
//             reject();
//             rl.close();
//         }
        
//     });
// });

// Promise.allSettled([p2, p1]).then((values) => {
//     console.log(values);
//     console.log(pq);
// });

