function myMoney(money) {
    console.log('MoveRight');
    console.log('MoveRight');
    console.log('MoveRight');
    console.log('MoveRight');

    var numberofBottles = Math.floor(money/1.5)
    console.log('buy' + numberofBottles +' bottles of milk');

    console.log('Moveleft');

    return money % 1.5;
}

myMoney(5);