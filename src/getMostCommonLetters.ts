import countOccurrences from "./countOccurrences";

/**
 Write a function, `getMostCommonLetters` which takes a 
 string (`inputText`) and a number, `numberOfWinners`, and 
 returns an array listing the top N most frequently-occurring letters 
 in the word list along with the count of their occurrences (where N is `numberOfWinners`)

 function getMostCommonLetters(inputText, num) {
  const allOcccurrences = countOccurrences(inputText)
  Insert alloCCURREences in to array
  sort(allOcccurences) by the second elems in each array and where
   elems are same, sort alphabetically
  take first N arrays
 }

Where there is a tie, sort in alphabetical order.
 */
const sortOccurrences = (keyValue1: [string, number], keyValue2: [string, number]) => {
  if (keyValue1[1]>keyValue2[1]) {
    return -1
  } else if (keyValue1[1]<keyValue2[1]) {
    return 1
  } else {
    if (keyValue1[0]>keyValue2[0]) {
      return 1
    } else if (keyValue1[0]<keyValue2[0]) {
      return -1
    }
    return 0
  }

}

function getMostCommonLetters(phrase: string, num : number): Array<Array<string|number>> {
  const allOcccurences = countOccurrences(phrase);
  const allOcccurencesArr = Object.entries(allOcccurences) ;
  allOcccurencesArr.sort(sortOccurrences);
  return allOcccurencesArr.slice(0,num)
}

// const jk: number[]|string[] = [5]

export default getMostCommonLetters;
