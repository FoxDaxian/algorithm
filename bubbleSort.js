// 冒泡排序，首先第一，正序的情况下稍大的值肯定一直往后冒泡，然后因为 j 和 j + 1比较，所以len需要减1，由于比过i次了，所以还需要减i
// needSwap的作用是，循环一次后，如果发现不需要交换位置，那么就是已经排序好的，所以跳出循环
const arr = [2, 20, 3, 5, 10, 7, 50]
// 交换位置的处理函数
function swap(pos1, pos2, array) {
	const temp = array[pos1]
	array[pos1] = array[pos2]
	array[pos2] = temp
}
// 内外都是正序
function bubbleSort1(arr) {
	const len = arr.length
	for (let i = 0; i < len; i++) {
		let needSwap = false
		for (let j = 0; j < len - 1 - i; j++) {
			if (arr[j] > arr[j + 1]) {
				needSwap = true
				swap(j, j + 1, arr)
			}
		}
		if (!needSwap) {
			break
		}
	}
	return arr
}

// 外正序，内逆序
function bubbleSort2(arr) {
	const len = arr.length
	for (let i = 0; i < len; i++) {
		let needSwap = false
		for (let j = len - 1; j > i; j--) {
			if (arr[j] < arr[j - 1]) {
				needSwap = true
				swap(j, j - 1, arr)
			}
		}
		if (!needSwap) {
			break
		}
	}
	return arr
}

// 外逆序，内正序
function bubbleSort3(arr) {
	const len = arr.length
	for (let i = len - 1; i > 0; i--) {
		let needSwap = false
		for (let j = 0; j < i; j++) {
			if (arr[j] > arr[j + 1]) {
				needSwap = true
				swap(j, j + 1, arr)
			}
		}
		if (!needSwap) {
			break
		}
	}
	return arr
}

// 外逆序，内逆序
function bubbleSort4(arr) {
	const len = arr.length
	for (let i = len - 1; i > 0; i--) {
		let needSwap = false
		for (let j = len - 1; j > len - i; j--) {
			if (arr[j] < arr[j - 1]) {
				needSwap = true
				swap(j, j - 1, arr)
			}
		}
		if (!needSwap) {
			break
		}
	}
	return arr
}
// 四种排序
console.log(bubbleSort1(arr))
console.log(bubbleSort2(arr))
console.log(bubbleSort3(arr))
console.log(bubbleSort4(arr))
