function simpleNumbers(n) {

    const list_simple_number = [];
    for (let i = 2; list_simple_number.length < n; i++) {
        let flag = false;
        for (let counter = 0; counter < i; counter++) {
            if (i % list_simple_number[counter] === 0) {
                flag = true;
                break;
            }
        }
        if (flag === false) {
            list_simple_number.push(i)
        };

    }
    return list_simple_number;
}


console.time('simpleNumbers');
console.log(simpleNumbers(process.argv[2]));
console.timeEnd('simpleNumbers');