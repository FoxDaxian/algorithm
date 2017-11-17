// 计数排序，使用条件，待排序的序列全部为正整数(含0)，排序需要额外的存储空间
// 原理：获取长度，填充，再循环

const arr = [2, 1, 1, 3, 2, 1, 4, 2]

function countSort(arr) {
	let len = arr.length
	let min = Infinity
	let max = -Infinity
	for (let i = 0; i < len; i++) {
		if (arr[i] < min) {
			min = arr[i]
		}
		if (arr[i] > max) {
			max = arr[i]
		}
	}
	const temp = new Array(max + 1)
	const res = []
	temp.fill(0)
	arr.forEach((item, index) => {
		temp[item]++
	})

	for (let i = 0, len = temp.length; i < len; i++) {
		if (i < min) {
			continue
		}
		while (temp[i]--) {
			res.push(i)
		}
	}
	return res
}

console.log(countSort(arr))
