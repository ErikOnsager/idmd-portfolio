function setup() {
  createCanvas(500, 500);
  var nums = [1, 2, 3]; //create an array
  append(nums, 4); //add 4 onto the end
  nums[2] = 10; //change the third value in the array to 10
  for (i = 0; i < nums.length; i++) { //for every number in the array
    text(nums[i], 100, 25 + 50 * i); //write the number, decreasing in height as you go down
  }
}

function draw() {
  
}