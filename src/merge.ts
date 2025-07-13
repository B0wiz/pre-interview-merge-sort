// This function merges 3 arrays into one sorted (ascending) array.
// collection1 and collection3 are already sorted from small to big.
// collection2 is sorted from big to small, so we reverse it first.

export function merge(
  collection1: number[],
  collection2: number[],
  collection3: number[]
): number[] {
  const result: number[] = [];

  // Reverse collection2 to make it sorted from small to big
  const c2 = reverseArray(collection2);

  // Set up indexes to track our position in each array
  let i = 0, j = 0, k = 0;

  // Get lengths of all three arrays
  const len1 = collection1.length;
  const len2 = c2.length;
  const len3 = collection3.length;

  // Keep going while at least one array still has items left
  while (i < len1 || j < len2 || k < len3) {
    // Get the current number from each array, or Infinity if it's done
    const val1 = i < len1 ? collection1[i] : Infinity;
    const val2 = j < len2 ? c2[j] : Infinity;
    const val3 = k < len3 ? collection3[k] : Infinity;

    // Find the smallest value and add it to the result
    if (val1 <= val2 && val1 <= val3) {
      result.push(val1);
      i++; // Move to the next number in collection1
    } else if (val2 <= val1 && val2 <= val3) {
      result.push(val2);
      j++; // Move to the next number in collection2
    } else {
      result.push(val3);
      k++; // Move to the next number in collection3
    }
  }

  return result; // Return the merged sorted array
}

// This helper function returns a new array with the elements reversed
function reverseArray(arr: number[]): number[] {
  const result = new Array(arr.length);
  for (let i = 0; i < arr.length; i++) {
    result[i] = arr[arr.length - 1 - i];
  }
  return result;
}