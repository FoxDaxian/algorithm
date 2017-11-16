// 归并排序采用分而治之的思想，理解为不断细化为两个数组，再排序，再合并，知道数组长度为1
// a >>> 1 将a的二进制表示享向右移1位，相当于向下取整
// 还是对js的执行逻辑有点模糊，感觉更多的是抵触心理，得刚啊
// 二叉树  #https://segmentfault.com/a/1190000004010854
// 二叉树的原理，也就是遇到函数继续走，停下剩下的，然后在依次返回， #https://zhuanlan.zhihu.com/p/26229293
// promise 比 定时器 在 堆中的优先级要高
// JS 中的事件循环https://zhuanlan.zhihu.com/p/26229293 https://zhuanlan.zhihu.com/p/26238030

const arr = [50, 2, 20, 10, 2, 3, 5,  7]
// 交换位置的处理函数
function swap(pos1, pos2, array) {
	const temp = array[pos1]
	array[pos1] = array[pos2]
	array[pos2] = temp
}

function mergeSort(arr) {
	if (arr.length < 2) {
		return arr
	}
	const halfLen = (arr.length >>> 1)
	const lArr = arr.slice(0, halfLen)
	const rArr = arr.slice(halfLen)
	return merge(mergeSort(lArr), mergeSort(rArr))
}

function merge(l, r) {
	const res = []
	let item
	while (l.length && r.length) {
		item = l[0] < r[0] ? l.shift() : r.shift()
		res.push(item)
	}
	// 从长度为1开始排序，所以到最后就是有顺序的了，所以才能用 concat 
	return res.concat(l[0]? l : r)
}

console.log(mergeSort(arr))