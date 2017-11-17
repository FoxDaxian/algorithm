// 快速排序，核心思想就是，先取中，将小的放一边，大的放一边，重复该步骤，知道数组长度小于等于1
// "快速排序"的思想很简单，整个排序过程只需要三步：
// (1）在数据集之中，选择一个元素作为"基准"（pivot）(一般取中间de)。
// (2）所有小于"基准"的元素，都移到"基准"的左边；所有大于"基准"的元素，都移到"基准"的右边。
// (3）对"基准"左边和右边的两个子集，不断重复第一步和第二步，直到所有子集只剩下一个元素为止。

const arr = [85, 24, 63, 45, 17, 31, 96, 50]

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

console.log(quickSort(arr))
