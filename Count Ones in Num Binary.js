function countOnesInNumBinary(num) {
	let ones = num.toString(2) // convert to binary. toString(2) converts to binary because 2 is the base of binary

	let numOfOnes = 0

	ones.split('').map((val, index) => {
		if (val == 1) numOfOnes++
	})

	console.log(`number of ones in ${num}'s binary are:`, numOfOnes)
}

countOnesInNumBinary(4210100101)
