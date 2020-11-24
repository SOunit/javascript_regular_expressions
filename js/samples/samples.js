import * as utils from './utils.js';

export const checkConnect = () => {
  console.log('java script is connected!');
};

export const showSample1 = () => {
  let title = 'Sample 1';
  let pattern = new RegExp('I am ...');
  let textList = ['I am M', 'I am Ma', 'I am Max', 'I am 123', 'You are Max'];
  utils.regExpCheck(title, pattern, textList);
};

export const showSample2 = () => {
  let title = 'Sample 2';
  let pattern = new RegExp('\\w');
  let textList = ['a', 'z', '1', '9', '?'];
  utils.regExpCheck(title, pattern, textList);

  pattern = new RegExp('\\W');
  utils.regExpCheck(title, pattern, textList);
};

export const showSample3 = () => {
  let title = 'Sample 3';
  let pattern = new RegExp('\\s');
  let textList = [' ', 'a', '_', '1'];
  utils.regExpCheck(title, pattern, textList);

  pattern = new RegExp('\\S');
  utils.regExpCheck(title, pattern, textList);
};

export const showSample4 = () => {
  let title = 'Sample 4';
  let pattern = new RegExp('\\d');
  let textList = ['a', 'z', '1', '9', 'A', 'Z'];
  utils.regExpCheck(title, pattern, textList);

  pattern = new RegExp('\\D');
  utils.regExpCheck(title, pattern, textList);
};

export const showSample5 = () => {
  let title = 'Sample 5';
  let pattern = new RegExp('a*');
  let textList = ['a', 'b', 'aa', 'aaaa', 'bbbb', '1', '111'];
  utils.regExpCheck(title, pattern, textList);
};

export const showSample6 = () => {
  let title = 'Sample 6';
  let pattern = new RegExp('a+');
  let textList = ['a', 'b', 'aa', 'aaaa', 'bbbb', '1', '111'];
  utils.regExpCheck(title, pattern, textList);
};

export const showSample7 = () => {
  let title = 'Sample 7';
  let pattern = new RegExp('a{3}');
  let textList = ['a', 'aa', 'aaa', 'aaaa'];
  utils.regExpCheck(title, pattern, textList);
};

export const showSample8 = () => {
  let title = 'Sample 8';
  let pattern = new RegExp('a{3,}');
  let textList = ['a', 'aa', 'aaa', 'aaaaaaaa', 'abcde'];
  utils.regExpCheck(title, pattern, textList);
};

// export const showSample3 = () => {
//   let title = 'Sample 3';
//   let pattern = new RegExp('abc*');
//   let textList = ['a', 'ab', 'abc', 'abcd', 'bcd'];
//   utils.regExpCheck(title, pattern, textList);
// };

// export const showSample4 = () => {
//   let title = 'Sample 4';
//   let pattern = new RegExp('[a-z]');
//   let textList = ['a', 'z', '1', '9', 'A', 'Z', 'az'];
//   utils.regExpCheck(title, pattern, textList);
// };

// export const showSample5 = () => {
//   let title = 'Sample 5';
//   let pattern = new RegExp('\\**');
//   let textList = ['', '*', '**', '***', 'a', 'z', 'A', 'Z'];
//   utils.regExpCheck(title, pattern, textList);
// };
