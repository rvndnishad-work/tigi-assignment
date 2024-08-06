import { add } from './utility/stringCalculator';

const input1 = '';
console.log(`Output: ${add(input1)}`);

const input2 = '1';
console.log(`Output: ${add(input2)}`);

const input3 = '1,5';
console.log(`Output: ${add(input3)}`);

const input4 = '1,-3,5';
// console.log(`Output: ${add(input4)}`);

const input5 = '1,\n3,5';
console.log(`Output: ${add(input5)}`);

const input6 = '//;\n1;3';
console.log(`Output: ${add(input6)}`);

const input7 = '//|\n1|3|5|7';
console.log(`Output: ${add(input7)}`);

const input8 = '\n';
console.log(`Output: ${add(input8)}`);
