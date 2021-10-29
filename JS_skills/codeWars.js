/* World Bits War
- iterate through array and change num.toString(2);
- number of 1s in binary are the value of that num;
- if num is negative, the value of that binary total is negative;
- total up value of ngative numbers and compare to value of postiive numbers;
*/

function bitsWar(numbers) {
    let oddArr = numbers.filter(function(o) {return o % 2 != 0});
    let evenArr = numbers.filter(function(e) {return e % 2 == 0});
    console.log(oddArr, evenArr)
    console.log(numbers.map(function(a) {return a.toString(2).match(/[1]/g).length}));
    console.log(numbers.map(function(a) {return Number(a.toString(2))}));
    console.log(oddArr.reduce(function(sum, num) {return num < 0 ? sum -= num.toString(2).match(/[1]/g).length 
                        : sum += num.toString(2).match(/[1]/g).length}));
};

console.log(bitsWar([7,-3,20])); /*  odds win */