import getMostCommonLetters from "./getMostCommonLetters";

test("finds top N occuring letters in given phrase", () => {
  expect(getMostCommonLetters("HELLO WORLDE",3)).toEqual([ 
    [ 'l', 3 ],
    [ 'e', 2 ], 
    [ 'o', 2 ]
  ]);
  expect(getMostCommonLetters("This is a sentence",4)).toEqual([ 
    [ 'e', 3 ], 
    [ 's', 3 ],
    [ 'i', 2 ],
    [ 'n', 2 ]
  ]);
  expect(getMostCommonLetters("eeeeeeo",4)).toEqual([ 
    [ 'e', 6 ], 
    [ 'o', 1 ],
  ]);
});
