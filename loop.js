const timeStarted = new Date();
let i = 0;
let array = [];
while (true) {
    array.push(i);
    if (array.length % 100000000 === 0) {
        console.log('OUTPUT: Clearing array');
        array = [];
    }
    
    if (i % 100000000 === 0) {
        console.log('OUTPUT: On iteration ', i, 'after', `${new Date() - timeStarted}ms`);
    }

    i++;
}
