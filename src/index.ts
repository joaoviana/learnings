const str =
  'All happy families are alike every unhappy family is unhappy in its own way';

// TODO: fix inconsistent spacing. Check even spacing and also get remainder.
const justifyText = (listOfWords: string[], width: number) => {
  const finalWords: string[] = [];
  let words: string[] = [];
  const myStr = '';
  listOfWords.map((word, idx) => {
    if (words.join(' ').length + word.length + 1 < 30) {
      words.push(word);
      if (idx === listOfWords.length - 1) {
        finalWords.push(
          words.join(' ') + ' '.repeat(30 - words.join(' ').length - 1)
        );
      }
    } else {
      const listOfWords = words.join();
      if (listOfWords.length + words.length < 30) {
        finalWords.push(words.join(' '.repeat(words.length)));
      } else {
        finalWords.push(words.join(' '));
      }
      words = [word];
    }
  });
  console.log(words);
  console.log(finalWords);

  finalWords.map((f) => console.log(f.length));
};

justifyText(str.split(' '), 30);
