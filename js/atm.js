// User Object
const customer1 = {
    name: "TOMER ALMOG",
    pin: 4567,
    amount: 10000
  };
const customer2 = {
    name: "NIR AMZALEG",
    pin: 1324,
    amount: 55000
  };
const customer3 = {
    name: "ITAY LEVI",
    pin: 8424,
    amount: 22000
  };

// Print useres Name and Pin
console.log("Name:"+customer1.name +" Pin:"+ customer1.pin);
console.log("Name:"+customer2.name +" Pin:"+ customer2.pin);
console.log("Name:"+customer3.name +" Pin:"+ customer3.pin);
  
// Catch some elements from HTML

// Cancel / Clear / Enter 
const enterButton = document.querySelector(".buttons2 #enter");
const cancelButton = document.querySelector(".buttons2 #cancel");
const clearButton = document.querySelector(".buttons2 #clear");

// Screen Side Buttons 
const dButton = document.querySelector("#opbut1");
const wButton = document.querySelector("#opbut2");
const cButton = document.querySelector("#opbut3");
const pButton = document.querySelector("#opbut4");
const rButton = document.querySelector("#opbut5");
const qButton = document.querySelector("#opbut6");

// Screen Option Text
const option1 = document.querySelector(".screen #option1");
const option2 = document.querySelector(".screen #option2");
const option3 = document.querySelector(".screen #option3");
const option4 = document.querySelector(".screen #option4");
const option5 = document.querySelector(".screen #option5");
const option6 = document.querySelector(".screen #option6");

// Receipt Paper
const receiptPaper = document.querySelector(".receiptpaper");
const removeReceipt = document.querySelector("#remove_receipt");

// Keyboard Buttons
const button0 = document.querySelector(".buttons #button0");
const button1 = document.querySelector(".buttons #button1");
const button2 = document.querySelector(".buttons #button2");
const button3 = document.querySelector(".buttons #button3");
const button4 = document.querySelector(".buttons #button4");
const button5 = document.querySelector(".buttons #button5");
const button6 = document.querySelector(".buttons #button6");
const button7 = document.querySelector(".buttons #button7");
const button8 = document.querySelector(".buttons #button8");
const button9 = document.querySelector(".buttons #button9");
const buttonDelete = document.querySelector(".buttons #delete");
const buttonSpace = document.querySelector(".buttons #space");

// When user click on the card the Welcome apper
function welcome(){    
    // Animation card go inside the slot
    card.style.animationName='example';
    // New content in the screen asking user to put Name
    content.innerHTML ='<h2>PLEASE ENTER YOUR NAME.</h2><input class="customer-name" type=text>';
    // When user press Enter a new event is created and check if user name is correct
    enterButton.addEventListener("click", checkUserName);
};

// Add the value from the App Keyboard into inputs
function addValue(number){
    let inputField = document.querySelector(".customer-name, #deposit, #withdraw, #withdraw_other, #new_pin, #number");
    inputField.value += number;
}

// + the value 
function extendValue(){
    let inputField = document.querySelector(".customer-name, #deposit, #withdraw, #withdraw_other, #new_pin, #number");
    inputField.value ++;
}

// Clear inputs value
function clearValue(){
    let inputField = document.querySelector(".customer-name, #deposit, #withdraw, #withdraw_other, #new_pin, #number");
    inputField.value = "";
}

// If username is not correct, it will ask to enter a valid name and the card will push out from the slot
function nameNotCorrect(){
    welcome()
    content.innerHTML ='<h2>PLEASE ENTER A VALID NAME.</h2>';
    card.style.animationName='exampleRevers';
}; 

// If user Pin not correct, it will ask to enter a valid Pin and the card will push out from the slot
function userPinNotCorrect(){
    welcome()
    content.innerHTML ='<h2>PLEASE ENTER A VALID PIN.</h2>';
    card.style.animationName='exampleRevers';
}

// Creat a new array with the user dedails to be used in some Functions
let user1 = [];

// Creat an Menu on the screan with the user data
function atmMenu(user){
    content.innerHTML = `<h2>ATM MENU:</h2>`;
    option1.innerHTML = "Deposite Money"
    option2.innerHTML = "Withdraw Money"
    option3.innerHTML = "Check your Balance"
    option4.innerHTML = "Change your Pin"
    option5.innerHTML = "Create Receipt"
    option6.innerHTML = "Quit"
    // Push the user data into an empty array
    user1.push(user)
    // Adding some events
    dButton.addEventListener("click", buttonD);
    wButton.addEventListener("click", buttonW);
    cButton.addEventListener("click", buttonC);
    qButton.addEventListener("click", buttonQ);
    pButton.addEventListener("click", buttonP);
    rButton.addEventListener("click", buttonR);
    cancelButton.addEventListener("click", cancel);
}

// Event for button D
function buttonD() {
    // Ask user to enter an amount into the new input
    content.innerHTML ='<h2>How much would you like to Deposite?</h2><input id="deposit" type=number>';
    
    // Clear innerHTML of all options
    for (let i = 1; i <= 6; i++) {
      document.querySelector('#option' + i).innerHTML = '';
    }
    
    // Add userDeposit event to Enter button 
    enterButton.addEventListener("click", userDeposit);
  
    // Check user input value if it multiply of 20, 50, 100
    function userDeposit() {
      let userDeposit = document.querySelector("#deposit");
      let validInput = false;
      
      // Loop through the multiples and check if the user input is a multiple
      for (let i = 20; i <= 100; i += 30) {
        if (userDeposit.value % i === 0 && userDeposit.value > 0) {
          validInput = true;
          user1[0].amount += +userDeposit.value;
          content.innerHTML = '<h2>'+ user1[0].name +' your deposit of '+ userDeposit.value +'₪ is successful.</h2>'; 
          setTimeout(function() {
            atmMenu(user1);
          }, 3000);
          break;
        }
      }
      // If user value returen False, it will get back to the input   
      if (!validInput) {
        content.innerHTML ='<h2>Please correct the value</h2>';
        setTimeout(function() {
            buttonD();
        }, 3000);
      }
    }
  }

// Event for button W
function buttonW(){
    // Ask user to enter an amount into the new input
    content.innerHTML ='<h2>How much would you like to Withdraw? <br> 1 - 50 , 2 - 100 , 3 - 150, 4 - 300, 5 - other</h2><input id="withdraw" type=number>';
    
    // Clear innerHTML of all options
    for (let i = 1; i <= 6; i++) {
        document.querySelector('#option' + i).innerHTML = '';
      }

    // Add userWithdraw event to Enter button 
    enterButton.addEventListener("click", userWithdraw);
    
    // Check user input value
    function userWithdraw(){
        // Catch the input ID
        let userWithdraw = document.querySelector("#withdraw")
        let withdrawError = " sorry, operation could not happen, insefitioned amount / you dont have enough Balance for this operaion.";
        // If input value = 1. 50 will removed from user Balance
        if(userWithdraw.value === "1"){ if(user1[0].amount - 50 >= 0){
            user1[0].amount = user1[0].amount - 50;
            content.innerHTML = '<h2>'+ user1[0].name +' your withdraw of 50₪ is successful.</h2>'; 
            setTimeout(function() {
                atmMenu(user1);
            }, 3000);
        // If user balance after this action is lower then 0, operation could not happen
        }else content.innerHTML = '<h2>'+ user1[0].name +' '+ withdrawError +'</h2>';
        setTimeout(function() {
            buttonW();
        }, 3000);
        }

        // If input value = 2. 100 will removed from user Balance
        if(userWithdraw.value === "2"){ if(user1[0].amount - 100 >= 0){
            user1[0].amount = user1[0].amount - 100;
            content.innerHTML = '<h2>'+ user1[0].name +' your withdraw of 100₪ is successful.</h2>'; 
            setTimeout(function() {
                atmMenu(user1);
            }, 3000);
        }else content.innerHTML = '<h2>'+ user1[0].name +' '+ withdrawError +'</h2>';
        setTimeout(function() {
            buttonW();
        }, 3000);
        }

        // If input value = 3. 150 will removed from user Balance
        if(userWithdraw.value === "3"){ if(user1[0].amount - 150 >= 0){
            user1[0].amount = user1[0].amount - 150;
            content.innerHTML = '<h2>'+ user1[0].name +' your withdraw of 150₪ is successful.</h2>'; 
            setTimeout(function() {
                atmMenu(user1);
            }, 3000);
        }else content.innerHTML = '<h2>'+ user1[0].name +' '+ withdrawError +'</h2>';
        setTimeout(function() {
            buttonW();
        }, 3000);
        }

        // If input value = 4. 300 will removed from user Balance
        if(userWithdraw.value === "4"){ if(user1[0].amount - 300 >= 0){
            user1[0].amount = user1[0].amount - 300;
            content.innerHTML = '<h2>'+ user1[0].name +' your withdraw of 300₪ is successful.</h2>'; 
            setTimeout(function() {
                atmMenu(user1);
            }, 3000);
        }else content.innerHTML = '<h2>'+ user1[0].name +' '+ withdrawError +'</h2>';
        setTimeout(function() {
            buttonW();
        }, 3000);
        }

        // If input value = 5. user value will be removed from user Balance
        if(userWithdraw.value === "5"){
            content.innerHTML ='<h2>Please enter the amount you would like to Withdraw.</h2><input id="withdraw_other" type=number>';
            // Creat a new event userOtherW for Enter button 
            enterButton.addEventListener("click", userOtherW);

            function userOtherW(){
                // Catch the input ID
                let userOtherWithdraw = document.querySelector("#withdraw_other");
                let validInput = false;
                
                // Loop through the multiples and check if the user input is a multiple
                for (let i = 20; i <= 100; i += 30) {
                    // Check if value is multiples and smaller then user Balance and bigger then 0
                    if (userOtherWithdraw.value % i === 0 && userOtherWithdraw.value <= user1[0].amount && userOtherWithdraw.value > 0) {
                    validInput = true;
                    // Remove the value from user Balance
                    user1[0].amount += -userOtherWithdraw.value;;
                    // Notic user for the withdraw amount
                    content.innerHTML = '<h2>'+ user1[0].name +' your withdraw of '+ userOtherWithdraw.value +'₪ is successful.</h2>'; 
                    // Remove userOtherW event from Enter button
                    enterButton.removeEventListener("click", userOtherW)
                    // Take user to the Menu page after 3 second
                    setTimeout(function() {
                        atmMenu(user1);
                    }, 3000);
                    // Stop the Loop
                    break;
                    }
                    // If user value is False, user will get an error 
                    }if (!validInput) {
                        content.innerHTML ='<h2>'+ user1[0].name +' '+ withdrawError +'</h2>';
                        // Remove userOtherW event from Enter button
                        enterButton.removeEventListener("click", userOtherW)
                        // Take user to enter a new value 
                        setTimeout(function() {
                            buttonW();
                        }, 3000);
                    }

            }
        }
    }  
}

// Show user current Balance
function buttonC(){
    content.innerHTML = '<h2>'+ user1[0].name +' Your current Balance is ' + user1[0].amount + '₪</h2>'
}

// Exit the ATM, remove buttons event and reload the page
function buttonQ(){
    content.innerHTML = '<h2>GOOD BYE '+ user1[0].name +', HAVE A NICE DAY!</h2>'
    // Clear innerHTML of all options
    for (let i = 1; i <= 6; i++) {
        document.querySelector('#option' + i).innerHTML = '';
      }
    // Remove events
    dButton.removeEventListener("click", buttonD);
    wButton.removeEventListener("click", buttonW);
    cButton.removeEventListener("click", buttonC);
    qButton.removeEventListener("click", buttonQ);
    pButton.removeEventListener("click", buttonP);
    rButton.removeEventListener("click", buttonR);
    // Reload the page after 3 second
    setTimeout(function() {
        location.reload();
      }, 3000);
}

// Event for button Cancel
function cancel(){
    content.innerHTML = '<h2>GOOD BYE '+ user1[0].name +', HAVE A NICE DAY!</h2>'
    // Clear innerHTML of all options
    for (let i = 1; i <= 6; i++) {
        document.querySelector('#option' + i).innerHTML = '';
      }
    // Remove events
    dButton.removeEventListener("click", buttonD);
    wButton.removeEventListener("click", buttonW);
    cButton.removeEventListener("click", buttonC);
    qButton.removeEventListener("click", buttonQ);
    pButton.removeEventListener("click", buttonP);
    rButton.removeEventListener("click", buttonR);
    // Take user to the Menu page 
    atmMenu(user1)
}

// Event for button P, let user to creat a new Pin
function buttonP(){
    content.innerHTML ='<h2>'+ user1[0].name +'<br> PLEASE ENTER YOUR NEW PIN.</h2><input id="new_pin" type="number">'
    // Clear innerHTML of all options
    for (let i = 1; i <= 6; i++) {
        document.querySelector('#option' + i).innerHTML = '';
      }
    // Add a new event userNewPin to button Enter   
    enterButton.addEventListener("click", userNewPin);
    // Take user input value and replace it with the existing 
    function userNewPin(){
        let newPin = document.querySelector("#new_pin")
        // Check if user enter min and max 4 numbers
        if (newPin.value.length >= 4 && newPin.value.length <= 4) {
            user1[0].pin = newPin.value;
            newPin.value = "";
            content.innerHTML = '<h2>'+ user1[0].name +' your new pin is successfully changed.</h2>'
            // Remove events from buttons
            dButton.removeEventListener("click", buttonD);
            wButton.removeEventListener("click", buttonW);
            cButton.removeEventListener("click", buttonC);
            qButton.removeEventListener("click", buttonQ);
            pButton.removeEventListener("click", buttonP);
            rButton.removeEventListener("click", buttonR);
            cancelButton.removeEventListener("click", cancel)
            // Transfer user to first function to enter his name and the new Pin
            // Reload the page after 3 second
            setTimeout(function() {
                welcome();
            }, 3000);
         } else {
            // Invalid input
            content.innerHTML = '<h2>'+ user1[0].name +' your new pin is Invalid.<br>The new Pin must contain 4 digits.</h2>';
            // Transfer user to enter again a new Pin
            // Reload the page after 3 second
            setTimeout(function() {
                buttonP();
            }, 4000);
         }
    }
}

// Date and Time
const d = new Date();
const hoursAndMinutes = d.getHours() + ':' + d.getMinutes();

// Creat a receipt with date and user Balance
function buttonR(){
receiptPaper.innerHTML = '<h3 class="rcph">'+d.toDateString()+' '+hoursAndMinutes+'<br><br>ATM<br><br>'+ user1[0].name +'<br><br>YOUR CURRENT BALANCE: '+user1[0].amount+'₪<br><br>THANK YOU<br>FOR USING YOUR ATM</h3>';
// Animation for the paper 
receiptPaper.style.animationName='example1';
// By clicking on the receipt slot, the receipt will disappear
removeReceipt.addEventListener("click", removeR);
function removeR(){
    receiptPaper.style.animationName='example1R';
}
}

// Check user name 
function checkUserName(){
    // Catch the value from the input
    let userNameInput = document.querySelector(".customer-name");
    // Transfer value to Upper Case
    let userNameToUpperCase = userNameInput.value.toUpperCase();
    // Check if value is equal to saved user data / if true it will ask user to enter Pin
    if(userNameToUpperCase === customer1.name || userNameToUpperCase === customer2.name || userNameToUpperCase === customer3.name){
    content.innerHTML ='<form><h2>WELCOME, ' + userNameToUpperCase + '<br> PLEASE ENTER YOUR PIN.</h2><input id="number" type=number max="9999"></form>'
    // Remove checkUserName event from the Enter button
    enterButton.removeEventListener("click", checkUserName);
    // Add a new event checkUserPin to Enter button
    enterButton.addEventListener("click", checkUserPin);
    // Check if user Pin is correct
    function checkUserPin(){
        // Catch user value from the input
        let userPinInput = document.querySelector("#number");
        // If user name and pin are correct it will transfer user to the Menu
        if(userPinInput.value == customer1.pin && userNameToUpperCase === customer1.name){
           atmMenu(customer1), enterButton.removeEventListener("click", checkUserPin);
        }if(userPinInput.value == customer2.pin && userNameToUpperCase === customer2.name){
            atmMenu(customer2), enterButton.removeEventListener("click", checkUserPin);
        }if(userPinInput.value == customer3.pin && userNameToUpperCase === customer3.name){
            atmMenu(customer3), enterButton.removeEventListener("click", checkUserPin);
        // If user pin is not correct it will remove the card from the slot 
        }else if(userPinInput.value != customer1.pin && userPinInput.value != customer2.pin && userPinInput.value != customer3.pin){
            userPinNotCorrect(); 
            enterButton.removeEventListener("click", checkUserPin);
        } 
    }
// If user name is not correct it will remove the card from the slot 
}else nameNotCorrect() 
}


