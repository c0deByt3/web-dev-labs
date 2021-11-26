/* World Bits War - WORKING!!!
- iterate through array and change num.toString(2);
- number of 1s in binary are the value of that num;
- if num is negative, the value of that binary total is negative;
- total up value of ngative numbers and compare to value of postiive numbers;
*/

// function bitsWar(numbers) {
//     let [oddTotal, evenTotal] = [0, 0];
                
//     for (let i of numbers) {
//         if (i == 0) {
//             continue;
//         } else {
//             i % 2 != 0 && i > 0 ? oddTotal += i.toString(2).match(/[1]/g).length :
//             i % 2 != 0 && i < 0 ? oddTotal -= i.toString(2).match(/[1]/g).length :
//             i % 2 == 0 && i > 0 ? evenTotal += i.toString(2).match(/[1]/g).length:
//                                             evenTotal -= i.toString(2).match(/[1]/g).length;
//          }
//     }

//     return evenTotal == oddTotal ? 'tie' : evenTotal > oddTotal ? 'evens win' : 'odds win';
    
// };

// console.log(bitsWar([-18,6,20,0])); /*  evens win */

// -----------------------------------------------------

/* Handshake problem - Working!!
- determine minimum amount of people to achieve target handshakes
- Incoroporated math formula for unique pairs
*/

// let getParticipants = handshakes => {
//     let people = 1;
//     while (people * (people - 1) / 2 < handshakes) {
//         people ++;
//     }
//     return people
// };

// console.log(getParticipants(6));

// -------------------------------------------------------

/* Repeated Substring - WORKING!!!
var count = str.length / 2 (biggest starting point)
var subStr = 2 (lowest substring starting point)

while count > 1 {check if str.substring(0, subStr).repeat(count) == str }
if so, return [str.subStr(0, count), count]
else return [str, 1]
*/

// function f(s) {
//     let subStr = 1;
 
//     while (subStr <= s.length) {
//         let count = s.length / subStr;
//         if (s.substring(0, subStr).repeat(count) == s) {
//             return [s.substring(0, subStr), count];
//         } else {
//             subStr++;
//         }                                  
//     }

//     return [s, 1];
// };

// console.log(f("abcabc"));

// f('aaaaa') not working. Should return ['a', 5]

// -------------------------------------------------------------

/* Statistics for an Athletic Association - WORKING!!!
- if empty string, return empty string, else:
- input.split(','), 
- iterate through array, substring.split('|') and convert each substring into seconds. val at [0] hours * 3600 etc.
- push total seconds for substring to new array for verification, arrange in ascending order
- range = highest - lowest value. Return as converted string h|m|s
- mean = newValArr.map(total / inputArr.length)
- median = middle number if odd, else average of middle two numbers 
*/

function stat(strg) {
    if (strg) {
        let ogArr = strg.split(',').map(function(a) {return a.split('|')});
        let secArr = Array();
        for (let i in ogArr) {
            let secVal = 0;
            for (let j in ogArr[i]) {
                j == 0 ? secVal += ogArr[i][j] * 3600 : j == 1 ? secVal += ogArr[i][j] * 60 : secVal += Number(ogArr[i][j]);    
            } secArr.push(secVal);
        } 

        secArr.sort(function(b, c) {return b - c});
        let range = secArr[secArr.length - 1] - secArr[0];
        let average = secArr.reduce(function (sum, num) {return sum += num}) / secArr.length;
        let median = secArr.length % 2 == 0 ? (secArr[(secArr.length / 2) - 1] + secArr[secArr.length / 2]) / 2 :
                                            secArr[Math.floor(secArr.length / 2)];

        function strTime(stat) {
            let h = String(Math.floor(stat / 3600)).padStart(2, '0');
            let m = String(Math.floor((stat - (h * 3600)) / 60)).padStart(2, '0');
            let s = String(Math.floor(stat - (h * 3600) - (m * 60))).padStart(2, '0');
            return `${h}|${m}|${s}`;
        }

        return `Range: ${strTime(range)} Average: ${strTime(average)} Median: ${strTime(median)}`;
    };

    return "";
};

console.log(stat("01|15|59, 1|47|16, 01|17|20, 1|32|34, 2|17|17")); 

/* => Range: 01|01|18 Average: 01|38|05 Median: 01|32|34" */