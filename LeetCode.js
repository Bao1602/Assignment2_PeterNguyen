//26. Remove Duplicates from Sorted Array
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    k = 0
    for(i = 1; i < nums.length; i++ ){
     if(nums[i] != nums[k]){
         k++;
         nums[k] = nums[i];
     }
    }
    return k + 1 ; 
 };

//509. Fibonacci Number
 /**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    sum = 0;
    if(n <= 1){
        return n
    } else{
        return fib(n - 1 )+ fib(n-2);
    }
};