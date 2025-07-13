# Merge Sorted Arrays (TypeScript + Jest)
## Pre Interview
This TypeScript implements a function:

```ts
merge(collection1: number[], collection2: number[], collection3: number[]): number[]
```

# Problem Description
Please write a typescript project with unit test:

For implementing function with this interface
    merge (int[] collection_1, int[] collection_2, int[] collection_3) : int []
That returns sorted array by ascending.

given
     collection_1, collection_3 already sorted from min(0) to max
     collection_2 already sorted from max to min(0)

Please provide accessible repo of typescript project with unit test
and provide how to setup dependency and execute code and unit test

Note: Don't allow to use any sort function

# Project Structure
```
.
├── jest.config.js
├── package-lock.json
├── package.json
├── README.md
├── src
│   └── merge.ts
├── test
│   └── merge.test.ts
└── tsconfig.json
```
# Testing Framework
This project uses Jest to ensure the merge function behaves correctly under various scenarios, including:
	•	Merging three sorted arrays with mixed ascending and descending inputs
	•	Handling empty input arrays gracefully
	•	Supporting duplicate values correctly
	•	Working with single-element arrays
	•	Handling negative numbers
	•	Managing arrays of different lengths

# Setup Instructions
1. Clone the Repository
```bash
git clone https://github.com/B0wiz/pre-interview-merge-sort.git
cd pre-interview-merge-sort
```

2. Install Dependencies
```bash
npm install
``` 

3. Run Unit Testing
```bash
npx jest
```

# Example Usage
you can use the `merge` function in your TypeScript code as follows:
```ts
import { merge } from './merge';

const result = merge([1, 3, 5], [7, 4, 2], [6, 8, 9]);
console.log(result); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
```
you can also run usage example in `src/usage.ts` file:

```bash
npx tsc
```

```bash
node dist/src/usage.js
```
