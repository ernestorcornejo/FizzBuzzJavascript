function FizzBuzz(){// Function declaration to hold our logic
    let i = 1;// Let us use a numeric variable i starting at 1
    while (i < 101) { // Loop from 1 to 100 using a while check
        if(i % 15 == 0){
        // Is divisible by 15?
        console.log("FizzBuzz"); 
      } else if(i % 3 == 0) {
        // If just 3 divides it with no remainder 
        console.log("Fizz");  
      } else if(i % 5 == 0) {
        // Handle if it's a multiple of 5
        console.log("Buzz"); 
      } else {  
        // Default case if none apply  
        console.log(i);
      }
      i++; // Increment i each pass of the loop 
    }
  }
  FizzBuzz();// Call our function