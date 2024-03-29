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

// function stat(strg) {
//     if (strg) {
//         let ogArr = strg.split(',').map(function(a) {return a.split('|')});
//         let secArr = Array();
//         for (let i in ogArr) {
//             let secVal = 0;
//             for (let j in ogArr[i]) {
//                 j == 0 ? secVal += ogArr[i][j] * 3600 : j == 1 ? secVal += ogArr[i][j] * 60 : secVal += Number(ogArr[i][j]);    
//             } secArr.push(secVal);
//         } 

//         secArr.sort(function(b, c) {return b - c});
//         let range = secArr[secArr.length - 1] - secArr[0];
//         let average = secArr.reduce(function (sum, num) {return sum += num}) / secArr.length;
//         let median = secArr.length % 2 == 0 ? (secArr[(secArr.length / 2) - 1] + secArr[secArr.length / 2]) / 2 :
//                                             secArr[Math.floor(secArr.length / 2)];

//         function strTime(stat) {
//             let h = String(Math.floor(stat / 3600)).padStart(2, '0');
//             let m = String(Math.floor((stat - (h * 3600)) / 60)).padStart(2, '0');
//             let s = String(Math.floor(stat - (h * 3600) - (m * 60))).padStart(2, '0');
//             return `${h}|${m}|${s}`;
//         }

//         return `Range: ${strTime(range)} Average: ${strTime(average)} Median: ${strTime(median)}`;
//     };

//     return "";
// };

// console.log(stat("01|15|59, 1|47|16, 01|17|20, 1|32|34, 2|17|17")); 

/* => Range: 01|01|18 Average: 01|38|05 Median: 01|32|34" */

// ---------------------------------------------------------------------

/* Regex Series: Generate a Password Validator - WORKING but tests are showing different online
- function generateRegex() takes 2 arguments, class  with lengths & overall min length of password
- build regex checker from inputs with {length} checked
*/

// const charClasses = [['[a-z]', 4], ['[0-9]', 4]];
// const minLength = 17;
// const yourRegex = generateRegex(charClasses, minLength);

// function generateRegex(charClasses, minLength) {
//     let lengthChk = charClasses.map(function(a) {return Number(a[1])}).reduce(function(sum, num) {return sum += num})  == minLength;
//     if (lengthChk) {
//         let charStrg = '';
//         for (let i in charClasses) {
//             charStrg += `${charClasses[i][0]}` + `{${charClasses[i][1]}}`;
//             lengthChk += charClasses[i][1];   
//         } 

//         let regexBuilder = new RegExp(charStrg, 'g');
//         return regexBuilder;
//     } 

//     let regexBuilder = new RegExp(`.{${minLength}}`, 'g');
//     return regexBuilder;
// };

// console.log(yourRegex.test("abcd123411"));

// ------------------------------------------------------------------------

/* Ranking NBA teams - WORKING!!!
- return team stats from input string -> "Los Angeles Clippers:W=1;D=0;L=1;Scored=204;Conceded=208;Points=3"
- if input string '' return ''
- if team not present in string -> "Team Name:This team didn't play!"
- if input string contains float -> "Error(float number):New York Knicks 101.12 Atlanta Hawks 112"
- check all fail conditions first else create tem object from string with all relevant stats
- return stats in string format above
*/

// let r1 = 'Los Angeles Clippers 104 Dallas Mavericks 88,New York Knicks 101 Atlanta Hawks 112,Indiana Pacers 103 Memphis Grizzlies 112,Los Angeles Lakers 111 Minnesota Timberwolves 112,Phoenix Suns 95 Dallas Mavericks 111,Portland Trail Blazers 112 New Orleans Pelicans 94,Sacramento Kings 104 Los Angeles Clippers 111,Houston Rockets 85 Denver Nuggets 105,Memphis Grizzlies 76 Cleveland Cavaliers 106,Milwaukee Bucks 97 New York Knicks 122,Oklahoma City Thunder 112 San Antonio Spurs 106,Boston Celtics 112 Philadelphia 76ers 95,Brooklyn Nets 100 Chicago Bulls 115,Detroit Pistons 92 Utah Jazz 87,Miami Heat 104 Charlotte Hornets 94,Toronto Raptors 106 Indiana Pacers 99,Orlando Magic 87 Washington Wizards 88,Golden State Warriors 111 New Orleans Pelicans 95,Atlanta Hawks 94 Detroit Pistons 106,Chicago Bulls 97 Cleveland Cavaliers 95,San Antonio Spurs 111 Houston Rockets 86,Chicago Bulls 103 Dallas Mavericks 102,Minnesota Timberwolves 112 Milwaukee Bucks 108,New Orleans Pelicans 93 Miami Heat 90,Boston Celtics 81 Philadelphia 76ers 65,Detroit Pistons 115 Atlanta Hawks 87,Toronto Raptors 92 Washington Wizards 82,Orlando Magic 86 Memphis Grizzlies 76,Los Angeles Clippers 115 Portland Trail Blazers 109,Los Angeles Lakers 97 Golden State Warriors 136,Utah Jazz 98 Denver Nuggets 78,Boston Celtics 99 New York Knicks 85,Indiana Pacers 98 Charlotte Hornets 86,Dallas Mavericks 87 Phoenix Suns 99,Atlanta Hawks 81 Memphis Grizzlies 82,Miami Heat 110 Washington Wizards 105,Detroit Pistons 94 Charlotte Hornets 99,Orlando Magic 110 New Orleans Pelicans 107,Los Angeles Clippers 130 Golden State Warriors 95,Utah Jazz 102 Oklahoma City Thunder 113,San Antonio Spurs 84 Phoenix Suns 104,Chicago Bulls 103 Indiana Pacers 94,Milwaukee Bucks 106 Minnesota Timberwolves 88,Los Angeles Lakers 104 Portland Trail Blazers 102,Houston Rockets 120 New Orleans Pelicans 100,Boston Celtics 111 Brooklyn Nets 105,Charlotte Hornets 94 Chicago Bulls 86,Cleveland Cavaliers 103 Dallas Mavericks 97';

// function nbaCup(resultSheet, toFind) {
//     if (resultSheet.includes(`${toFind} `) && toFind != '') {
//         let games = resultSheet.split(',').filter(function(a) {return a.includes(toFind)}).map(function(c) {return c.split(/(?<=\d)\s/g)});
//         let stats = {team: `${toFind}`, wins: 0, draw: 0, loss: 0, totScore: 0, totConcede: 0, points:0};
      
//         for (let i of games) {
//             if (i.join().match(/\d+[.]\d+/g) != null) {
//                 return `Error(float number):${i.join(' ')}`;
//             };

//             let scored = 0;
//             let conceded = 0;
            
//             for (let j of i) {
//                     j.includes(toFind) ? scored += Number(j.match(/\d+$/g)) : conceded += Number(j.match(/\d+$/g));
//             } 

//             scored > conceded ? stats.wins++ : scored < conceded ? stats.loss++ : stats.draw++;
//             stats.totScore += scored;
//             stats.totConcede += conceded;
//         }
    
//         stats.points += stats.wins * 3
//         stats.points += stats.draw * 1;
//         return `${toFind}:W=${stats.wins};D=${stats.draw};L=${stats.loss};Scored=${stats.totScore};Conceded=${stats.totConcede};Points=${stats.points}`;
//     }

//     return toFind == '' ? '' : `${toFind}:This team didn't play!`;
// };

// console.log(nbaCup(r1, 'Dallas Mavericks'));

// expected 'Boston Celtics:W=2;D=2;L=0;Scored=403;Conceded=NaN;Points=8' to equal 'Boston Celtics:W=4;D=0;L=0;Scored=403;Conceded=350;Points=12'

// ---------------------------------------------------------------------

/* Pick peaks - NOT WORKING 
- peak is considered a value that is higher than surrounding numbers (before & after)
- first and last number are not considered peaks
- start index at pos 1, while pos is leass than array.length check if val[i] is greater than val[i-1] && val[i+1]
- if val[i] == val[i+1] and ends with a lower num count as a plateu
- return object {pos:[], peaks:[]}
*/

// function pickPeaks(arr) {
//     let pos = 1;
//     let results = {pos:[], peaks:[]};

//     while (pos < arr.length - 1) {
//         let [preVal, val, nextVal] = [arr[pos-1], arr[pos], arr[pos+1]];

//         if (preVal < val && val > nextVal) {
//             results.pos.push(pos);
//             results.peaks.push(arr[pos]);
//         } else if (preVal < val && val == nextVal) {
//             let plateauLen = arr.slice(pos);
//             let plateauFilter = new RegExp(`${val}+`);
//             let plateauCheck = plateauLen.slice(0, plateauLen.join('').match(plateauFilter).join('').length + 1);
            
//             if (plateauCheck[plateauCheck.length - 1] < plateauCheck[plateauCheck.length - 2]) {
//                 results.pos.push(pos);
//                 results.peaks.push(val);
//             }
//             pos += plateauLen.join('').match(plateauFilter).join('').length - 1;
//         } 
//         pos++;
//     }
//     return results;
// };

// console.log(pickPeaks([1,2,2,2,1,4,1,2,3,2,1])); /* [1,2,3,6,4,1,2,3,2,1] {pos:[3,7], peaks:[6,3]} */

// ------------------------------------------------------------------------

/* Simple division - WORKING!!!*/

// function solve(a,b) {
//     let isPrimeFactor = [];
//     let divisor = 2;

//     while (b >= 2) {
//         if (b % divisor == 0) {
//             if (!isPrimeFactor.includes(divisor)) {
//                 isPrimeFactor.push(divisor);
//             }; 
//             b /= divisor;
//         } else {
//             divisor++;
//         }
//     };

//     return !isPrimeFactor.map(function(num) {return a % num == 0}).includes(false);
// };

// console.log(solve(2, 256));

// --------------------------------------------------------------------------

/* Disgruntled Employee - WORKING!!!
- create array of n length + 1 with loop starting from index 1 (with state of on)
- while passes < n iterate over array and assign on / off depending on state
- flip every nth switch and change state
- return all off switches
*/

// function off(n) {
//     let switches = Array(n + 1).fill('on');

//     for (let pass = 1; pass <= n; pass++) {
//         let switchN = pass;

//         while (switchN <= n) {
//             switches[switchN] == 'on' ? switches[switchN] = 'off' : switches[switchN] = 'on';
//             switchN += pass
//         }
//     } 

//     return switches.map(function(val, index) {if (val == 'off') {return index}}).filter(function(state) {return state});
// };

// console.log(off(9));

// -------------------------------------------------------------------------------

/* Change it up - WORKING!!!
- iterate through string, change each letter to the one following in the alphabet
- create reference alphabet with at the end to cover loop around
- letter will become indexOf(i) + 1
- loop through string again and if letter consonant then lower case
- if vowel upper case
*/

// function changer(str) {
//     let alpha = 'abcdefghijklmnopqrstuvwxyza';
//     let chngStr = '';

//     for (let i of str) {
//         let letter = i.toLowerCase();
//         alpha.includes(letter) ? chngStr += alpha[alpha.indexOf(letter) + 1] : chngStr += i;
//     }

//     return chngStr.replace(/[aeiou]/g, function(vow) {
//         return vow.toUpperCase();
//     })
// };

// console.log(changer("Cat30")) /* => dbU30  */

// ----------------------------------------------------------------------

/* Format words into a sentence - WORKING!!!
- join array with commas and  last letter being joined with 'and'
- ternary statement with null check returning ''
*/

// function formatWords(words) {
//     if (!words || words.length == 0 || words == '') {
//         return '';
//     }

//     let cleanWord = words.join().match(/\w+/g);

//     return cleanWord.length == 1 ? cleanWord.join() :
//             cleanWord.slice(0,cleanWord.length - 1).join(', ') + ` and ${cleanWord.slice(cleanWord.length - 1)}`;
// };

// console.log(formatWords(['', '', 'two','three']));  /* 'one, two, three and four' */

// -------------------------------------------------------------------------

/* Compress Sentences - WORKING!!!
- change string to lowercase and split into array
- create string of first indexOf() each word in array
*/

// let compress = (sentence) => {
//     let cleanStr = sentence.toLowerCase().split(' ');
//     let unique = Array.from(new Set(sentence.toLowerCase().split(' ')));
//     return cleanStr.map(function(a) {return unique.indexOf(a)}).join('');
// };

// console.log(compress("The number 0 is such a strange number Strangely it has zero meaning"));

// ---------------------------------------------------------------------------

/* Battle of the characters - WORKING!!!
- iterate through each word if uppercase whole number, if lowercase uppercase value / 2
- tally up score for each word passed as argument and return highest scoring word
*/

// const battle = (x, y) => {
//     let score = '_ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//     let strength = [];

//     for (let word of [x, y]) {
//         let wordCount = 0;

//         for (let letter of word) {
//             score.includes(letter) ? wordCount += score.indexOf(letter) : wordCount += score.indexOf(letter.toUpperCase()) / 2;
//         }       
//         strength.push(wordCount);
//     } 
    
//     return strength[0] == strength[1] ? 'Tie!' : strength[0] > strength[1] ? x : y;
// };

// console.log(battle("One", "Two"));

// ----------------------------------------------------------------------------------

/* Sum of Minimums! - WORKING!!!
- find lowest number in each array passed
- add minimum values and return sum
*/

// const sumOfMinimums = (arr) => {
//     return arr.map((num) => Math.min(...num)).reduce((sum,val) => sum += val, 0);
// };

// console.log(sumOfMinimums([[7, 9, 8, 6, 2], [6, 3, 5, 4, 3], [5, 8, 7, 4, 5]]));

// ----------------------------------------------------------------------------------

/* Filter Long Words - WORKING!!! */

// const filterLongWords = (sentence, n) => sentence.split(' ').filter(a => a.length > n);

// console.log(filterLongWords("The quick brown fox jumps over the lazy dog", 4));


// -----------------------------------------------------------------------------------

/* Insert dashes - WORKING!!!
- convert num.toString()
- iterate through string, while i < i.length -2, compare i &* i + 1
- if both odd, add dash, else move on
*/

// const insertDash = num => {
//     let numStr = num.toString();
//     let dashed = [numStr[0]];

//     for (let i = 0; i < numStr.length - 1; i++) {
//         let [uno, dos] = [numStr[i], numStr[i + 1]];
//         uno % 2 != 0 && dos % 2 != 0 ? dashed.push(`-${dos}`) : dashed.push(`${dos}`);
//     }

//     return dashed.join('');
// };

// console.log(insertDash(454793)); /* '4547-9-3' */

// ---------------------------------------------------------------------------------

/* Filter unused digits - WORKING!!!
- create reference string of all digits 0-9
- return those !s.includes(reference)
*/

// Working in local environment.

// function unusedDigits() {
//     const ref = '0123456789';
//     let input = Object.values(...arguments).join('');

//     return [...ref].filter((val) => !input.includes(val)).join('')
// };

// Working on Codewars

// function unusedDigits() {
//     const ref = '0123456789';
//     let input = Object.values(arguments).join('');

//     return [...ref].filter((val) => !input.includes(val)).join('');
// };

// console.log(unusedDigits({ '0': 12, '1': 34, '2': 56, '3': 78 }));

// ---------------------------------------------------------------------------------

/* Find the vowels - WORKING!!! */

const vowels = 'aeiuoy';

console.log([...vowels])

const vowelIndices = (words) => [...words]
                    .map((letter, index) => vowels.includes(letter.toLowerCase()) ? index + 1 : '')
                    .filter((num) => num);

console.log(vowelIndices('supercalifragilisticexpialidocious'));