// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    let money = [1,5,10,25,50];
    let moneyName = ['P', 'N', 'D', 'Q', 'H'];
    let count = 0;
    let ExchangeObject = {};
    if (currency <= 0){
        // console.log("1");
        return ExchangeObject;
    } else if (currency > 10000) {
        ExchangeObject.error= "You are rich, my friend! We don't have so much coins for exchange";
        // console.log("2");
        return ExchangeObject;
    } else if (currency >0 && currency < 10000) {
        // console.log("3");
        for(let i= 4; i >= 0; i--) {
            while(currency >= money[i]) {
                currency -= money[i];
                count++;
                // console.log(count);
            }
            if (count > 0) {
                ExchangeObject[moneyName[i]] = count;
                count = 0;
            }
        }
        return ExchangeObject;
    }

    return ExchangeObject;
    
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
}
