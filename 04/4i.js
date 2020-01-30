function toCoins(amount, coins){
    let str = '';
    for(i = 0; i < coins.length; i++){
       while((amount - coins[i]) >= 0){
        str = str.concat(coins[i].toString(), ', ');
        amount = amount - coins[i];
       }
    }
    return str;
}

module.exports = {
    get: toCoins
  };