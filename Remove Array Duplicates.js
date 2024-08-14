const arr = [1, 1, 2, 3, 3, 2, 4, 5, 5, 6];

for (let i = 0; i < arr.length; i++){
    const exists = arr[i];
    
    for (let j = 1; j < arr.length; j++){
        
        if (i === j) continue;
        
        if (exists === arr [j]){
            arr.splice(j, 1);
        }
    }
}

console.log(arr)
