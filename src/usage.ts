import { merge } from './merge';

const result = merge([1, 3, 5], [7, 4, 2], [6, 8, 9]);
console.log(result); // [1, 2, 3, 4, 5, 6, 7, 8, 9]