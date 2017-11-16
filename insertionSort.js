// 插入排序，分为三种直接插入，折半插入，希尔排序
// 插入排序的关键是先找到对应的插入点，然后把大于或者小于插入点的所有元素移动一个位置，然后把被插入的元素插入插入点

function swap(pos1, pos2, array) {
    const temp = array[pos1]
    array[pos1] = array[pos2]
    array[pos2] = temp
}
const arr = [70, 2, 20, 3, 5, 10, 7, 50]

// 直接插入排序
function directInsertionSort(arr) {
    const len = arr.length
    for (let i = 1; i < len; i++) {
        for (let j = 0; j < i; j++) {
            if (arr[i] <= arr[j]) {
                swap(i, j, arr)
            }
        }
    }
    return arr
}

// 折中插入排序
function binaryInsertionSort(array) {
    var current, i, j, low, high, m;
    for (i = 1; i < array.length; i++) {
        low = 0;
        high = i - 1;
        current = array[i];

        while (low <= high) { //步骤1&2:折半查找
            m = (low + high) >> 1;
            if (array[i] >= array[m]) { //值相同时, 切换到高半区，保证稳定性
                low = m + 1; //插入点在高半区
            } else {
                high = m - 1; //插入点在低半区
            }
        }
        for (j = i; j > low; j--) { //步骤3:插入位置之后的元素全部后移一位
            array[j] = array[j - 1];
        }
        array[low] = current; //步骤4:插入该元素
    }
    return array;
}

console.log(binaryInsertionSort(arr))