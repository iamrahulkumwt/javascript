// for

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 6) {
        // console.log("6 is the best number");
    }
    // console.log(element);
}

for (let i = 1; i < 10; i++) {
    // console.log(`Outer number ${i}`);
    for (let j = 1; j < 10; j++) {
        // console.log(`inner number ${i} * ${j} = ${i*j}`);
    }
}

for (let i = 1; i <= 100; i++) {
    const element = i
    // console.log(`${element}. i'm sorry dear`);
}

// break and continue

for (let i = 1; i <= 10; i++) {
    const element = i;
    if (element == 6) {
        // console.log(`we found no. ${element}`);
        break
    }
    // console.log(element);
}

for (let i = 1; i <= 10; i++) {
    const element = i;
    if (element == 6) {
        console.log(`we found no. ${element}`);
        continue
    }
    console.log(element);
}