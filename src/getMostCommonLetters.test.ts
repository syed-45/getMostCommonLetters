import getMostCommonLetters from "./getMostCommonLetters";

test("finds top N occuring letters in given phrase", () => {
  expect(getMostCommonLetters("HELLO WORLDE",3)).toEqual([ 
    [ 'l', 3 ],
    [ 'e', 2 ], 
    [ 'o', 2 ]
  ]);
});
