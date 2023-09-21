// const x = '1';
// const y = '2';
// console.log(x , y);

// console.log('I am %s and my age is %d' , 'Mihir' , 19);
// console.clear();
// console.count('am mihir');
// console.count('am mihir');
// console.count('am dev');
// console.countReset('am mihir');

// const function1 = () => console.trace();
// const function2 = () => function1();

// function2();

// const sum = () => console.log(`the sum of 2 and 3 is : ${2 + 3}`);
// const multiply = () => console.log(`the sum of 2 and 3 is : ${2 * 3}`);

// const measureTime = () => {
//     console.time('su()');
//     sum();
//     console.timeEnd('su()');
//     console.time('multiply()');
//     multiply();
//     console.timeEnd('multiply()');
// };
// measureTime();

const ProgressBar = require('progress');
const bar = new ProgressBar('downloading [:bar] :rate/bps :percent :etas' , {
    total: 20,
});

const timer = setInterval(() => {
    bar.tick();
    if(bar.complete){
        clearInterval(timer);
    }
} , 100);

const chalk = require('chalk');
console.log(chalk.blue('This is nodeJS tutorial'))