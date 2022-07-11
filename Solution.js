/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    // initialize the sums, 0 because we don't know the sums yet.

   let totalSum = 0; 
   let leftSum = 0; 

   // now let's calculate the total sum

   nums.forEach((element) => totalSum += element);

/* 
now we have the sum, so we want to check for the condition.
but before that, we need to loop through each element in the array.
*/

   for(let e=0; e<nums.length; e++){
      if(totalSum - leftSum - nums[e] === leftSum){
         return e;
      }
      leftSum += nums[e]
   }
   return -1;
}

    
