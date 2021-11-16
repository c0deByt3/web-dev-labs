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

function f(s) {
    let subStr = 1;
 
    while (subStr <= s.length) {
        let count = s.length / subStr;
        if (s.substring(0, subStr).repeat(count) == s) {
            return [s.substring(0, subStr), count];
        } else {
            subStr++;
        }                                  
    }

    return [s, 1];
};

console.log(f("abcabc"));

// f('aaaaa') not working. Should return ['a', 5]