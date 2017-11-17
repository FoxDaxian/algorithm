// 基数排序，根据每个位上的数来排序的
// 从个位到十位到百位等等
// 关键点是获取位数


// 固定排序容器数组
const container = new Array(10)
for (let i = 0; i < 10; i++) {
	container[i] = []
}


const arr = [10000, 70, 2, 20, 3, 5, 10, 7, 50]

// 可以用闭包代替
let index = 0
// 第二个参数 只要够大比数组中最大的数还要大就OK
function radixSort(arr, maxDigit) {
	let temp
	const len = arr.length
	for (let i = 0; i < len; i++) {
		if (typeof getDigits(arr[i], index) !== 'undefined') {
			container[getDigits(arr[i], index)].push(arr[i])
		} else {
			container[0].push(arr[i])
		}
	}
	// 要是想改变原数组，就在这用循环改变arr，不要直接赋值
	arr = container.reduce((sum, value) => {
		return sum.concat(value)
	})
	// 重置存储器
	for (let i = 0; i < 10; i++) {
		container[i] = []
	}
	index++
	if (index < maxDigit) {
		return radixSort(arr, maxDigit)
	} else {
		return arr
	}
}

radixSort(arr, 5)




// 获取一个数字的个位数字，纯函数
// 默认取到个位，从0开始
function getDigits(num, maxDigit) {
	maxDigit = maxDigit || 0
	if (num.toString().length < maxDigit) {
		return
	}
	num = +(num.toString().slice(0, num.toString().length - maxDigit))
	let len = num.toString().length
	while (len-- > 1) {
		num %= Math.pow(10, len)
	}
	return num
}
