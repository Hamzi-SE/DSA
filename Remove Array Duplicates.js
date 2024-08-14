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

console.log(arr);
