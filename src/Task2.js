function testConvert() {
	var data = [
		[10, 20, 30, 40, 50, 60],

		[1, 5, 7, 4, 3, 4, 5],

		[2, 5, 10, 100, 0, 5, 7],

		[10, 10, 10]
	]
	var output = [
		[72000000, 36000000, 24000000, 18000000, 14400000, 12000000],
		[8400, 1680, 1200, 2100, 2800, 2100, 1680],
		[0, 0, 0, 0, 350000, 0, 0],
		[100, 100, 100]
	]

	var accepted = 0
	for (var i = 0; i <= data.length; i++) {
		try {
			console.log("Test case: " + i)
			console.log("Input:")
			console.log(data[i])
			console.log("Expected output:")
			console.log(output[i])
			console.log("Actual Output:")
			var ans = convert(data[i])

			function convert(data) {
				var myArray = []
				for (var i = 0; i < data.length; i++) {
					var num = 1;
					for (var j = 0; j < data.length; j++) {
						if (j !== i) {
							num = num * data[j];
						}
					}
					myArray.push(num)
				}
				console.log(myArray);
				return myArray;
			}
			convert(data[i])
			// console.log(ans)
		var isCorrect = data[i].length === ans.length;
		for (var j = 0; j < ans.length; j++) {
			if (ans[j] !== output[i][j]) {
				isCorrect = false;
				break;
			}
		}
		if (isCorrect)
			accepted += 1
	}
		catch (e) {
		console.log(e)
	}
	console.log("\n\n")
}

console.log("Verdict:")
if (accepted == output.length)
	console.log("------All test passed-------")
else
	console.log("-----Test Failed: " + accepted + " tests passed out of " + output.length + "-----")
}

testConvert()

