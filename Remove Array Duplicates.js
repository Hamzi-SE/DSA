const arr = [1, 1, 2, 3, 3, 2, 4, 5, 5, 6, 1];

for (let i = 0; i < arr.length; i++) {
    const exists = arr[i];
    
    for (let j = i + 1; j < arr.length; j++) { // Start j at i+1 to avoid comparing the same element
        if (exists === arr[j]) {
            arr.splice(j, 1);
            j--; // Adjust j after splice to account for the shifted elements
        }
    }
}

console.log(arr);    // Time complexity: O(n^2)


//==================//

function removeDuplicates(arr) {
    const seen = {};
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        const current = arr[i];
        
        if (!seen[current]) {
            result.push(current);  // Add to result if not seen before
            seen[current] = true;  // Mark the element as seen
        }
    }

    return result;
}

const uniqueArr = removeDuplicates(arr);

console.log(uniqueArr);    // Time complexity: O(n)
