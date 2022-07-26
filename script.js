// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


var characterupper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

var characterlower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var characternum = [0,1,2,3,4,5,6,7,8,9];

var charactersym = ["!","@","#","$","%","&","*"]





function generatePassword() {
  var characterchoices = [];
  var passwordlength = "";
  var lengthchoice = window.prompt("Please choose a password length of at least 8 characters and no more than 128 characters.");

  if (!lengthchoice) {
    alert("You must select a lenght!!");
  } 
  else if (lengthchoice < 8 || lengthchoice > 128) {
    lengthchoice = alert("You must choose between 8 and 128");
  } 
  else { 
    var typelower = window.confirm("Would you like to use lowerscase letters?");
    
    var typeupper = window.confirm("Would you like to use uppercase letters?");10
    
    var typenum = window.confirm("Would you like to use numeric values?");
    
    var typespec = window.confirm("Would you like to use special characters?");
  }
  
  if (!typelower && !typeupper && !typenum && !typespec) {
    window.alert("You must choose a character type!");

  }

  if (typelower) {
    characterchoices.push(...characterlower)
  }

  if (typeupper) {
    characterchoices.push(...characterupper)
  }

  if (typenum) {
    characterchoices.push(...characternum)
  }

  if (typespec) {
    characterchoices.push(...charactersym)
  }
  //4 yes choices

  // else if (typelower && typeupper && typenum && typespec) {
  //   characterchoices = characterupper.concat(characterlower, characternum, charactersym); 

  // }

  // // 3 yes choices

  // else if (typeupper && typelower && typenum) {
  //   characterchoices = characterupper.concat(characterlower, characternum);

  // }

  // else if (typeupper && typelower && typespec) {
  //   characterchoices = characterupper.concat(characterlower, charactersym);
  // }

  // else if (typeupper && typenum && typespec) {
  //   characterchoices = characterupper.concat(characternum, charactersym);
  // }

  // else if (typelower && typenum && typespec) {
  //   characterchoices = characterlower.concat(characternum, charactersym);

  // }

  // //2 yes choices

  // else if (typeupper && typelower) {
  //   characterchoices = characterupper.concat(characterlower);

  // }

  // else if (typeupper && typenum) {
  //   characterchoices = characterupper.concat(characternum);
    
  // }

  // else if (typeupper && typespec) {
  //   characterchoices = characterupper.concat(charactersym);
    
  // }

  // else if (typelower && typenum) {
  //   characterchoices = characterlower.concat(characternum);
    
  // }

  // else if (typelower && typespec) {
  //   characterchoices = characterlower.concat(charactersym);
    
  // }

  // else if (typenum && typespec) {
  //   characterchoices = characternum.concat(charactersym);
  // }

  // //1 yes choices

  // else if (typeupper) {
  //   characterchoices = characterupper;

  // }

  // else if (typelower) {
  //   characterchoices = characterlower;

  // }

  // else if (typenum) {
  //   characterchoices = characternum;

  // }

  // else if (typespec) {
  //   characterchoices = charactersym;

  // };
  
  for (var i = 0; i < lengthchoice; i++) {
    var characterdecisions = characterchoices[Math.floor(Math.random() * characterchoices.length)];
    //passwordlength.push(characterdecisions);
    passwordlength += characterdecisions;
    
  }

  // var finalpassword = passwordlength.join(",");

  // console.log(passwordlength.join(","));
  
  // window.alert(finalpassword);

  return passwordlength;


};




  





