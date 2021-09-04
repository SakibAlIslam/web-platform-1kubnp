const inputId = document.getElementById('inputId');
const inWordsId = document.getElementById('inWordsId');

inputId.addEventListener('input', e => {
  inWordsId.textContent = inWords(Number(e.target.value));
});

var a = {
  1: 'one ',
  2: 'two ',
  3: 'three ',
  4: 'four ',
  5: 'five ',
  6: 'six ',
  7: 'seven ',
  8: 'eight ',
  9: 'nine ',
  10: 'ten ',
  11: 'eleven ',
  12: 'twelve ',
  13: 'thirteen ',
  14: 'fourteen ',
  15: 'fifteen ',
  16: 'sixteen ',
  17: 'seventeen ',
  18: 'eighteen ',
  19: 'nineteen '
};
var b = {
  2: 'twenty',
  3: 'thirty',
  4: 'forty',
  5: 'fifty',
  6: 'sixty',
  7: 'seventy',
  8: 'eighty',
  9: 'ninety'
};

// this is lakh and crore format, not in million format.
/* eslint-disable eqeqeq */
// 11
const inWords = num => {
  num = num.toFixed(2);
  let arr = String(num).split('.');
  if (arr[0].length > 13) {
    return 'out of range';
  }
  const newNumber = arr[0].padStart(13, '0');

  str = newNumber[0] != 0 ? `${a[newNumber[0]]} lakh ` : '';
  str =
    str +
    (newNumber[1] != 0
      ? newNumber[1] == 1
        ? `${a[newNumber[1] + newNumber[2]]} thousand `
        : `${b[newNumber[1]]} `
      : '');
  str =
    str +
    (newNumber[2] != 0
      ? newNumber[1] == 1
        ? ``
        : `${a[newNumber[2]]} thousand `
      : newNumber[1] > 1
      ? 'thousand '
      : '');
  str = str + (newNumber[3] != 0 ? `${a[newNumber[3]]} hundred ` : '');

  str =
    str +
    (newNumber[4] != 0
      ? newNumber[4] == 1
        ? `${a[newNumber[4] + newNumber[5]]} crore `
        : `${b[newNumber[4]]} `
      : '');
  str =
    str +
    (newNumber[5] != 0
      ? newNumber[4] == 1
        ? ``
        : `${a[newNumber[5]]} crore `
      : newNumber[4] > 1
      ? 'crore '
      : '');

  str =
    str +
    (newNumber[6] != 0
      ? newNumber[6] == 1
        ? `${a[newNumber[6] + newNumber[7]]} lakh `
        : `${b[newNumber[6]]} `
      : '');
  str =
    str +
    (newNumber[7] != 0
      ? newNumber[6] == 1
        ? ``
        : `${a[newNumber[7]]} lakh `
      : newNumber[6] > 1
      ? 'lakh '
      : '');

  str =
    str +
    (newNumber[8] != 0
      ? newNumber[8] == 1
        ? `${a[newNumber[8] + newNumber[9]]} thousand `
        : `${b[newNumber[8]]} `
      : '');
  str =
    str +
    (newNumber[9] != 0
      ? newNumber[8] == 1
        ? ``
        : `${a[newNumber[9]]} thousand `
      : newNumber[8] > 1
      ? 'thousand '
      : '');

  str = str + (newNumber[10] != 0 ? `${a[newNumber[10]]} hundred ` : '');

  str =
    str +
    (newNumber[11] != 0
      ? newNumber[11] == 1
        ? `${a[newNumber[11] + newNumber[12]]} taka `
        : `${b[newNumber[11]]} `
      : '');
  str =
    str +
    (newNumber[12] != 0
      ? newNumber[11] == 1
        ? ``
        : `${a[newNumber[12]]}  taka `
      : newNumber[11] > 1
      ? ' taka '
      : '');
  str += str && arr[1][0] > 0 ? ' and ' : '';
  str =
    str +
    (arr[1]
      ? arr[1][0] != 0
        ? arr[1][0] == 1
          ? `${a[arr[1][0] + arr[1][1]]} poisha `
          : `${b[arr[1][0]]}`
        : ''
      : '');
  str =
    str +
    (arr[1]
      ? arr[1][1] != 0
        ? arr[1][0] == 1
          ? ` `
          : ` ${a[arr[1][1]]} poisha `
        : arr[1][0] > 1
        ? ' Poisha '
        : ''
      : '');

  str += str && 'only';

  return str;
};
// One lakh core

// 9007899.31
// console.log(inWords(9007899.31));
