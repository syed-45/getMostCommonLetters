/**
Write a function, `countOccurrences` which takes a string and returns an 
object detailing the number of occurrences in the string of each letter in the string.

E.g. 

INPUT: “HELLO”

OUTPUT: {”E”: 1, “O”: 1, “H”: 1, “L”: 2}  
 */

function countOccurrences(input: string): object {
  const outputObj: Record<string, number> = {}
  for (let letter of input) {
    let letterInsensitive = letter.toLowerCase()
    if (letterInsensitive === ' ') {}
    else if (outputObj[letterInsensitive]!==undefined) {
      outputObj[letterInsensitive] += 1
    } else {
      outputObj[letterInsensitive] = 1
    }
  }
  return outputObj
}

export default countOccurrences;

