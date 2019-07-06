// PLEASE DON'T change function name

module.exports = function makeExchange(currency) {

    // Your code goes here!

    // Return an object containing the minimum number of coins needed to make change

    let money=currency;

    const coins={};

    const labels={

        "H":50,

        "Q":25,

        "D":10,

        "N":5,

        "P":1

    }



    if(money<0){

        return {};

    }else if( money>10000){

        return {error: "You are rich, my friend! We don't have so much coins for exchange"}

    }else if(money<=9999){

        for(let key in labels){

        

        if(money/labels[key]>0){

          const floored=Math.floor(money/labels[key]);

          if(floored>0){

            coins[key]=floored;

            money = money - floored*labels[key]; 

          }  

        }

      }

    }



    return coins;

}