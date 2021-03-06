// https://github.com/SM-Soikot/JavaScript

        // Unit conversion

function kilometerToMeter(kilometer) {
    return Math.abs(kilometer * 1000);
}

        // Budget calculetor 

function budgetCalculator(watch, phone, laptop) {
    return Math.abs((watch * 50) + (phone * 100) + (laptop * 500));

}

        // Hotel cost 

function  hotelCost(n) {

    if (n <= 10) {
        return Math.abs(n * 100);
    }
    if (n <= 20) {
        return Math.abs(1000 + ((n - 10) * 80));
    }
    if (n > 20) {
        return Math.abs(1800 + ((n - 20) * 50));
    }
}

        // Mega Friend

function megaFriend(friends) {
    let longestWord = "";

    friends.forEach(
        function (word) {
            if (word.length > longestWord.length) {
                longestWord = word;
            }
        });
    return longestWord;
}
