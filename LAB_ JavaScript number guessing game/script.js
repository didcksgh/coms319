// Your solution goes here 
function playGuessingGame(numToGuess, totalToGuess){
    totalToGuess = 10;
    let count = 0;

    let number = prompt("Enter a number between 1 and 100.");
    while(totalToGuess>0){
        if(number == numToGuess){
            count++;
            break;
        }
        if(number == null){
            return 0;
        }
        if(number == "" || isNaN(number)){
            do{
                number=prompt("Please enter a number.");

            }while(number == "" || isNaN(number));
            totalToGuess--;
        }
        if(number<numToGuess){
            count++;
            number=prompt(number +" is too small. Guess a larger number.");
            totalToGuess--;

        }
        if(number>numToGuess){
            count++;
            number=prompt(number+" is too large. Guess a smaller number.");
            totalToGuess--;
        }
    }
    if(number == numToGuess){
        return count;
    }else return 0;

}