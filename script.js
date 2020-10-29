// Assignment Code
var generateBtn = document.querySelector("#generate");

//Global variables

// Uppercase Characters
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y','Z',];

// Lowercase Characters
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',];

// Special Characters
var symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '.', '(',')','{','}','~','<','>','_',';',':','/','=']

// Numbers 
var numbers = ["1","2","3","4","5","6","7","8","9","0"];

// Not a Number!
var notNumb = ["NaN"]


// Write password to the #password input
function writePassword() {
  var list = [""]
  var input = prompt("Type your password lenght at least 8 characters and no more than 128 characters")
  
   // Criteria section 

  // ALERT! only numbers allowed!

  if(isNaN(input)){

    list = list.concat(notNumb);

    alert("Please type only numbers.")
  }

  // Only Numbers between 8 - 128!
     
  if (input>128 || input< 8){

    alert("The number must be between 8 and 128!")  

  }
   
  //Lowercase criteria
   
  if(input<129 && input>7){

    if(confirm("Include Lower Case?")){

      list = list.concat(lowerCase);

    }

    //Uppercase criteria

    if(confirm("Include Upper Case?")){

      list = list.concat(upperCase);

    } 
    
    // Numbers criteria

    if(confirm("Include Numbers?")){

      list = list.concat(numbers);

    }
     
    //Special characters criteria
    
    if(confirm("Include Special Characters?")){

      list = list.concat(symbols);

    }

  }
    
  // Display password result on placeholder 
  
  var password = ""
  for(i = 0; i < input; i++){
    password = password + list[Math.floor(Math.random()*list.length)]
  }
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

  
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)