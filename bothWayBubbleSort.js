// 双向冒泡排序，就是外层循环一次，内层小到大再大到小走两次，感觉并没有什么优化可讲

const arr = [2, 20, 2, 2, 3, 5, 10, 7, 50]
// 交换位置的处理函数
function swap(pos1, pos2, array) {
	const temp = array[pos1]
	array[pos1] = array[pos2]
	array[pos2] = temp
}

function bothWayBubbleSort(arr) {
	const len = arr.length
	let needSwap = false
	for (let i = 0; i < len; i++) {
		for (let j = 0; j < len - 1 - i; j++) {
			if (arr[j] > arr[j + 1]) {
				needSwap = true
				swap(j, j + 1, arr)
			}
		}
		i++
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
console.log(bothWayBubbleSort(arr))
