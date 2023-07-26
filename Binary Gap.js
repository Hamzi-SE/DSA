// Find longest sequence of zeros in binary representation of an integer.
// ex: 1041 = 10000010001 (binary) = 5 (longest sequence of consecutive zeros)

function solution(N) {
	let binaryValue = N.toString(2)

	let lengthArr = []
	let length = 1

	for (let i = 0; i < binaryValue.length; i++) {
		if (binaryValue[i] == 0) {
			if (binaryValue[i + 1] == 1) {
				lengthArr.push(length)
				length = 0
			}

			length++
		}
	}

	return lengthArr.length ? Math.max(...lengthArr) : 0
}

console.log(solution(1041)) // 5
