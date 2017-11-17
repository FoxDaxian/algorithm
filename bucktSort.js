// 桶排序，和计数排序很像，而且内部用了其他算法，感觉很慢
// 桶排序本身是稳定的排序, 因此它的稳定性与桶内排序的稳定性保持一致.

// 借用了快速排序
function quickSort(arr) {
	if (arr.length <= 1) {
		return arr
	}
	const len = arr.length
	const halfLen = len >>> 1
	const midEl = arr[halfLen]
	const lArr = []
	const rArr = []
	for (let i = 0; i < len; i++) {
		if (i === halfLen) {
			continue
		}
		if (arr[i] < midEl) {
			lArr.push(arr[i])
		} else {
			rArr.push(arr[i])
		}
	}
	const lTemp = lArr.length > 1 ? quickSort(lArr) : lArr
	const rTemp = rArr.length > 1 ? quickSort(rArr) : rArr
	// 这里也是运用了js执行栈后进先出（先进后出）的原理
	// 这点要记住，就是函数进去之后，因为是同步，所以遇到内部函数会先执行内部函数，停止内部函数之后的所有操作，等内部函数执行完之后（也就是出栈）才会继续执行，内部函数内部若还有其他函数，循环以上步骤
	return lTemp.concat([midEl], rTemp)

}

const arr = [5, 2, 12, 2, 134, 1, 3, 34, 4, 6, 1, 3, 4]

function bucktSort(arr) {
	if (!arr.length) {
		return arr
	}
	const buckts = 5
	const len = arr.length
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
	const temp = new Array(buckts)
	const bucketsRange = Math.ceil(max / buckts)

	for (let i = 0; i < buckts; i++) {
		temp[i] = []
	}

	for (let i = 0; i < len; i++) {
		temp[~~(arr[i] / bucketsRange)].push(arr[i])
	}

	arr.length = 0
	temp.map((item) => {
		return quickSort(item)
	}).forEach((item) => {
		item.forEach((it) => {
			arr.push(it)
		})
	})
	return arr
}

console.log(bucktSort(arr))
