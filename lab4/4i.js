function moneyToCoins(amount, coins) {
    let count = 0;
    let temp = 0;
    let out = [];
    for (let i = 0; i < coins.length; i++) {
        temp = 0;
        while (temp <= amount) {
            temp = count + coins[i];
            if (temp <= amount) {
                count = temp;
                out.push(coins[i]);
            }
        }
    }
    return out;
}

console.log(moneyToCoins(46, [25, 10, 5, 2, 1]));