// 选择排序，同样是排序，但是如果遇到数组内有相同值得时候，虽然它们的值相同, 但它们相对的顺序却发生了变化，这种现象称作不稳定性
// 比如[2, 2, 1, 3]，第一个2和1发生位置交换，所以两个2的位置发生了变化
function swap(pos1, pos2, array) {
	const temp = array[pos1]
	array[pos1] = array[pos2]
	array[pos2] = temp
}
const arr = [70, 2, 20, 3, 5, 10, 7, 50]

function selectSort(arr) {
	const len = arr.length
	for (let i = 0; i < len; i++) {
		let num = Infinity
		let index = false
		for (let j = i; j < len; j++) {
			if (arr[j] < num) {
				num = arr[j]
				index = j
			}
		}
		index && swap(index, i, arr)
	}
	return arr
}

console.log(selectSort(arr))