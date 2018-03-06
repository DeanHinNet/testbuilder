// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.

  var cardType = "";

  switch(true){
  	case ((cardNumber.substring(0,2) == 38 || cardNumber.substring(0,2) == 39) && cardNumber.length === 14):
  		cardType = "Diner's Club";
  		break;
  	case ((cardNumber.substring(0,2) == 34 || cardNumber.substring(0,2) == 37) && cardNumber.length === 15):
  		cardType = "American Express";
  		break;
  	case ((cardNumber.substring(0,2) >= 51 && cardNumber.substring(0,2) <= 55) && cardNumber.length === 16):
			cardType = "MasterCard";
			break;
    case ((cardNumber.substring(0,4) == 4903 || cardNumber.substring(0,4) == 4905 || cardNumber.substring(0,4) == 4911 || cardNumber.substring(0,4) == 4936 || cardNumber.substring(0,4) == 6333 || cardNumber.substring(0,4) == 6759 || cardNumber.substring(0,6) == 564182 || cardNumber.substring(0,6) == 633110 )
        && (cardNumber.length == 16 || cardNumber.length == 18 || cardNumber.length == 19)):
      cardType = "Switch";
      break;
      
		case (cardNumber.substring(0,1) == 4 && (cardNumber.length == 13 || cardNumber.length == 16 || cardNumber.length == 19)):
			cardType = "Visa";
			break;
  

    case (((cardNumber.substring(0,4) == 6011 || cardNumber.substring(0,2) == 65) || (cardNumber.substring(0,3) >= 644 && cardNumber.substring(0,3) <= 649)) && (cardNumber.length == 19 || cardNumber.length == 16)):
      cardType = "Discover";
      break;

    case (((cardNumber.substring(0,4) == 5018 || cardNumber.substring(0,4) == 5020 || 
            cardNumber.substring(0,4) == 5038 || cardNumber.substring(0,4) == 6304)) 
          && (cardNumber.length >= 12 && cardNumber.length <= 19)):
      cardType = "Maestro";
      console.log()
      break;
      //   STEP FOUR:
// Excellent work! Write your own tests and make them pass for the last two networks:

// China UnionPay always has a prefix of 622126-622126, 624-626, or 6282-6288 and a length of 16-19.
// Switch always has a prefix of 4903, 4905, 4911, 4936, 564182, 633110, 6333, or 6759 and a length of 16, 18, or 19.

// Heads up! Switch and Visa seem to have some overlapping card numbers - in any apparent conflict, you should choose the network with the longer prefix.
    case (((cardNumber.substring(0,6) >= 622126 && cardNumber.substring(0,6) <= 622925) || 
          (cardNumber.substring(0,3) >= 624 && cardNumber.substring(0,3) <= 626) ||
          (cardNumber.substring(0,4) >= 6282 && cardNumber.substring(0,4) <= 6288)
          )
          && (cardNumber.length >= 16 && cardNumber.length <= 19)):
      cardType = "China Unionpay";
      break;
      //   Switch always has a prefix of 4903, 4905, 4911, 4936, 564182, 633110, 6333, or 6759 and a length of 16, 18, or 19.

// // Heads up! Switch and Visa seem to have some overlapping card numbers - in any apparent conflict, you should choose the network with the longer prefix.
   


  }
  
  return cardType;
};


