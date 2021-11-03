/* World Bits War - WORKING!!!
- iterate through array and change num.toString(2);
- number of 1s in binary are the value of that num;
- if num is negative, the value of that binary total is negative;
- total up value of ngative numbers and compare to value of postiive numbers;
*/

function bitsWar(numbers) {
    let [oddTotal, evenTotal] = [0, 0];
                
    for (let i of numbers) {
        if (i == 0) {
            continue;
        } else {
            i % 2 != 0 && i > 0 ? oddTotal += i.toString(2).match(/[1]/g).length :
            i % 2 != 0 && i < 0 ? oddTotal -= i.toString(2).match(/[1]/g).length :
            i % 2 == 0 && i > 0 ? evenTotal += i.toString(2).match(/[1]/g).length:
                                            evenTotal -= i.toString(2).match(/[1]/g).length;
         }
    }

    return evenTotal == oddTotal ? 'tie' : evenTotal > oddTotal ? 'evens win' : 'odds win';
    
};

console.log(bitsWar([-18,6,20,0])); /*  evens win */