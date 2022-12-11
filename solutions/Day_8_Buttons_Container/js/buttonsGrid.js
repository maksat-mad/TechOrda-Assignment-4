const nums = [1, 2, 3, 6, 9, 8, 7, 4];
const ids = [1, 2, 3, 6, 9, 8, 7, 4];

function shiftClockwise() {
    nums.unshift(nums.pop());
    for (let i = 0; i < 8; i++) {
        document.getElementById("btn" + ids[i]).innerHTML = nums[i];
    }
}