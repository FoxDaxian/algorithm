// 堆排序，在处理大大数量数据的时候有很大优势，利用二叉堆（二叉树的变种，满二叉树哦）
// 当前节点(索引为从0开始的时候)的左右子节点获取方式：左：i * 2 + 1  右： i * 2 + 2
// 父节点i的左子节点在位置(2*i+1)
// 父节点i的右子节点在位置(2*i+2)
// 子节点i的父节点在位置~~((i-1)/2)
// 由于堆排序中初始化堆的过程比较次数较多, 因此它不太适用于小序列. 同时由于多次任意下标相互交换位置, 相同元素之间原本相对的顺序被破坏了, 因此, 它是不稳定的排序.
// 原理是，每次让二叉树的'各个三角形'顶部为最大或者最小值，这样循环下来，就会导致有一个最大值或者最小值，然后添加到结果数组中，直到arr长度为空

const arr = [5, 2, 12, 2, 134, 1, 3, 34, 4, 6, 1, 3, 4]

//先将交换元素部分抽象出来
function swap(i, j, array) {
	var temp = array[j];
	array[j] = array[i];
	array[i] = temp;
}
function heapSort(arr) {
	const res = [];
	(function internal() {
		const len = arr.length
		for (let i = len - 1; i > 0; i--) {
			for (let j = 0; j < len; j++) {
				const left = j * 2 + 1
				const right = j * 2 + 2
				const temp = arr[left] < arr[right] ? right : left
				if (arr[j] < arr[temp]) {
					swap(j, temp, arr)
				}
			}
		}
		res.unshift(arr.shift())
		arr.length && internal(arr)
	})()
	return res
}

console.log(heapSort(arr))

