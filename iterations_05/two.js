// while / do while loops

let count = 1;

while (count <= 10 ) {
    // console.log(`my count is ${count}`);
    count++
}

// for (let i = 1; i <= 10; i++) {
//     const count = i;
//     console.log(`my outer count is ${count}`);
//     for (let j = 1; j <= 10; j++) {
//         console.log(`my inner count ${i} * ${j} = ${i*j}`);
//     }
// }

let score = 1;

while (score <= 10) {
    const outer = score
    score++
    // console.log(`my outer score ${outer}`);

    let score2 = 1;
    while (score2 <= 10) {
        const inner = score2
        score2++
        // console.log(`my inner score ${outer} * ${inner} = ${outer*inner}`);
    }
}


let point = 1;

do {
    console.log(`my point no. is ${point}`);    
    point++
} while (point <= 10);