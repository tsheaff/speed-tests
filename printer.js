const array = [];

// const timeStarted = new Date();
for (let i = 0; i < 1000000000; i++) {
    // array.push(i);
    if (i % 100000000 === 0) {
        console.log('OUTPUT: On iteration ', i, 'after', `${new Date() - timeStarted}ms`);
    }
}

console.log('OUTPUT: Finished with all', array.length, 'iterations');
console.log('OUTPUT: Total time', `${new Date() - timeStarted}ms`);